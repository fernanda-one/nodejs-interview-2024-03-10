import { prismaClient } from "../config/database.js";
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const authMiddleware = async (req, res, next) => {
    try {
        const authorizationHeader  = req.get('Authorization');
        if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
            return res
            .status(401)
            .json({ success: false, message: "Invalid authorization header" });
        }
        const decode = jwt.verify(authorizationHeader.replace("Bearer ", ""), (process.env.SECRET_JWT))
        if (!decode) {
            res.status(401).json({
                errors: "Unauthorized"
        }).end();
        } 
        req.user = decode;
        next();
    } catch (error) {
        console.log("🚀 ~ authMiddleware ~ error:", error)
        return res.status(401).json({ success: false, message: "Invalid token" })
    }

}

