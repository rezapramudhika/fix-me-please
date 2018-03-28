const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
  isbn: String,
  title: String,
  author: String,
  category: Number,
  stock: Number
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book
