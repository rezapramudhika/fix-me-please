const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api-crud-mongoose',{ useMongoClient: true }, (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

const books = require('./routes/books');
const transactions = require('./routes/transactions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
