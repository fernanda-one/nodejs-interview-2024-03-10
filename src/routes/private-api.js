import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";

const privateRouter = new express.Router();
privateRouter.use(authMiddleware)

export { privateRouter };
