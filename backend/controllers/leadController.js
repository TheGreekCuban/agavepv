const db = require("../models");
const mw = require("../middleware")

// Defining methods for the leadController
module.exports = {
  create: function(req, res) {
    db.Lead
      .create(req.body)
      .then(response => res.send(response))
      .catch(err => res.status(422).json(err));
  },
  send: function(req, res) {
    mw.Send(req.body)
    .then(response => response.end())
    .catch(err => res.status(422).json(err))
    res.end()
  },
  findAll: function(req, res) {
    db.Lead
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  scrape: function(req, res) {
    mw.Scrape(req, res)
    .then(articles => res.json(articles))
    .catch(err => res.status(422).json(err));
  }
};

/*

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