import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router();
publicRouter.post("/api/users", userController.register);
publicRouter.post("/api/users/login", userController.login);
publicRouter.get("/", async (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
});

export { publicRouter };
