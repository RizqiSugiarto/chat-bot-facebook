import express from "express";
import homePageController from "../controllers/homePageController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homePageController.getHomePage);
  router.get("/webhook", homePageController.getWebHook);
  router.post("/webhook", homePageController.postWebHook);
  return app.use("/", router);
};

module.exports = initWebRouter;
