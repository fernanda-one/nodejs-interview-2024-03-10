import express from "express";
import dataController from "../controller/data-controller.js";
import rabbitController from "../controller/rabbit-controller.js";

const publicRouter = new express.Router();
publicRouter.get("/", async (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
});

publicRouter.get("/api/data/:id", dataController.getOneData)
publicRouter.get("/api/data", dataController.getListData)
publicRouter.post("/api/data", dataController.createData)
publicRouter.put("/api/data/:id", dataController.updateData)
publicRouter.delete("/api/data/:id", dataController.deleteData)

publicRouter.post("/api/rabbit", rabbitController.createData)
publicRouter.put("/api/rabbit/:id", rabbitController.updateData)
publicRouter.delete("/api/rabbit/:id", rabbitController.deleteData)




export { publicRouter };
