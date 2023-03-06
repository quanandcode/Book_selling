const Book = require("../model/Book");

class homeController {
  async getBooks(req, res) {
    try {
      const books = await Book.find({});
      res.status(200).json(books);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: err.mesage });
    }
  }
  async postBook(req, res) {
    const { name, description, image } = req.body;
    try {
      const book = await Book.create({ name, description, image });
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json({ err: err.mesage });
    }
  }
  deleteBook(req, res) {
    res.json({ msg: "deleteMethod" });
  }
  updateBook(req, res) {
    res.json({ msg: "patch method" });
  }
}
module.exports = new homeController();
