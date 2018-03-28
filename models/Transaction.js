const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('../models/Book');

const transactionSchema = Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now() },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
