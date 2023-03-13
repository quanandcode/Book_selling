const adminController = require("../app/controller/adminController");
const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/stored/books", adminController.storedBooks);
// adminRouter.get("/create/books", adminController.showFormCreate);

adminRouter.post("/create/book", adminController.createBook);
// adminRouter.delete("/stored/books/:id", adminController.deleteBook);
// adminRouter.patch("/stored/books/:id", adminController.updateBook);

module.exports = adminRouter;
