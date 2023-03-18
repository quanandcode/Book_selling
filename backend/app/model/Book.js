const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const imageShema = new Schema({
  url: { type: String, required: true },
  filename: { type: String, required: true },
});
const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: imageShema,
    },
    price: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
