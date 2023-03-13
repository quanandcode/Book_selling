const Book = require("../model/Book");

class adminController {
  async storedBooks(req, res) {
    try {
      const books = await Book.find({});
      res.status(200).json(books);
    } catch (err) {
      if (err.message.includes("Book validation failed")) {
        console.log(err);
      }
      res.status(400).json(err);
    }
  }

  async createBook(req, res) {
    try {
      const book = await Book.create(req.body);
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  //   deleteBook;
  //   updateBook;
}
module.exports = new adminController();
