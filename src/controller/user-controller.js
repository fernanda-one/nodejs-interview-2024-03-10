import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const logout = async (req, res, next) => {
    try {
        const result = await userService.logout(req);
        res.status(200).json({
            message:"success"
        })
    } catch (e) {
        next(e);
    }
}

const refreshToken = async (req, res, next) =>{
    try {
        const result = await userService.refreshToken(req)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export default {
    register,
    login,
    refreshToken,
    logout
}