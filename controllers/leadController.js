const db = require("../models");

// Defining methods for the leadController
module.exports = {
  create: function(req, res) {
    db.Lead
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  send: function(req, res) {
    db.Send(req.body, res)
    .then(response => res.send(response))
    .catch(err => res.send(err));
  }
};

/*
findAll: function(req, res) {
    db.Lead
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Lead
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Lead
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Lead
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  */