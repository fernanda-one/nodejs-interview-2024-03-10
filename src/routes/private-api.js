import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const privateRouter = new express.Router();
privateRouter.use(authMiddleware)
privateRouter.post("/api/users/refresh-token", userController.refreshToken);
privateRouter.post("/api/users/logout", userController.logout);

export { privateRouter };
