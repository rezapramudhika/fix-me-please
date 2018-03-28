const Transaction = require('../models/Transaction');
const Book = require('../models/Book');

module.exports = {
  all: function(req, res) {
    Transaction.find()
      .populate('booklist')
      .exec()
      .then((transactions) => {
          res.status(200).json({
              message : 'Success get all data',
              data    : transactions
          })
      })
      .catch(err => {
          res.status(500).json({
              message : 'Failed to get all data'
          })
      })
  },
  create: function(req, res) {
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    Transaction.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
