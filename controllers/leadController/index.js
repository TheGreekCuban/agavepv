const db = require("../../models");
const mw = require("../../middleware")

// Defining methods for the leadController
module.exports = {
  create: function(req, res) {
    console.log("LEAD", typeof(req.body))
    db.Lead
      .create(req.body)
      .then(response => res.send(response))
      .catch(err => res.status(422).json(err));
  },
  send: function(req, res) {
    mw.Send(req.body)
    res.end()
  }
};

    /*
        db.Scraper.findOne({
            title: result.title
        }, (error, existingArticle) => {
            if (existingArticle === null) {
                db.Scraper.create(result).then(dbScraper => {
                    count += 1
                }).catch(error => {
                    console.log(error)
                })
            }
        })
    })
    })

    //We need a get route to get all the articles from the DB
    router.get("/showscraped", (request, response) => {
    //Find with no parameters grabs every document in the scraper collection
    db.Scraper.find({
            saved: false
        })
        .then(dbScraper => {
            console.log("DB SCRAPER: ", dbScraper.length)
            response.render("index", {
                articles: dbScraper,
                totalArticles: dbScraper.length
            })
        }).catch(error => {
            response.json(error)
        })
    })

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