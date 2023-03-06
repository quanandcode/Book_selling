const express = require("express");
const homeRouter = express.Router();
const homeController = require("../app/controller/homeController");
homeRouter.get("/", homeController.getBooks);
homeRouter.post("/", homeController.postBook);
homeRouter.delete("/:id", homeController.deleteBook);
homeRouter.patch("/:id", homeController.updateBook);

module.exports = homeRouter;
