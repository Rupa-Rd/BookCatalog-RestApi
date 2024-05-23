const mongoose = require("mongoose");

const bookCatalogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose("bookCatalog", bookCatalogSchema);
