const express = require("express");
const homeRouter = express.Router();
const homeController = require("../app/controller/homeController");
homeRouter.get("/", homeController.getBooks);

module.exports = homeRouter;
