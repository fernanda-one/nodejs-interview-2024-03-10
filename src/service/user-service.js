import { prismaClient } from "../config/database.js";
import { hash } from "../helper/bcyrpt.js";
import { loginUserValidation, registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import * as uuid from "uuid"
import jwt from "jsonwebtoken"
import 'dotenv/config'

const register = async (request) => {
        const user = validate(registerUserValidation, request);
        const countUser = await prismaClient.users.findFirst({
            where:{
                email:request.email
            }
        })
    
        if (countUser) {
            throw new ResponseError(400, "Username already exists");
        }
        const salt = uuid.v4();
        user.password = await hash(request.password, salt)
        user.salt = salt

        return prismaClient.users.create({
            data: user,
            select: {
                email: true,
                name: true
            }
        });
}
const login = async (request) => {
    const loginRequest = validate(loginUserValidation, request);
    const user = await prismaClient.users.findFirst({
        where: {
            email: loginRequest.email
        }
    });
    if (!user) {
        throw new ResponseError(401, "Email or password wrong");
    }
    const hashedPassword = await hash(loginRequest.password, user.salt);
    if (hashedPassword !== user.password) {
        throw new ResponseError(401, "Email or password wrong");
    }
    const session = await prismaClient.sessions.create({
        data: {
          users_id: user.id,
          refresh_token: uuid.v4(),
          status: 'active',
        },
      });
      const payload = {
        sub: user?.id,
        role: user?.role?.name,
        session_id: session.id,
        name: user?.name,
        email:user?.email
      };
      const secret_key = process.env.SECRET_JWT
      const accessToken = jwt.sign(payload,secret_key, {
        expiresIn: '1d',
      });
      const refreshToken = session.refresh_token;
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
}

export default {
    register,
    login
}