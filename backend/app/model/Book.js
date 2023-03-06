const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    name: { type: String, require: true, maxlength: 100 },
    description: { type: String, require: true, minlength: 3 },
    image: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
