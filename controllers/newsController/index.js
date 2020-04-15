const db = require("../../models");
const mw = require("../../middleware")

// Defining methods for the newsController
module.exports = {
  loadArticles: function(req, res) {
    db.Scraper
      .find({})
      .sort('date')
      .then(articles => res.send(articles.slice(0, 8)))
      .catch(err => res.status(422).json(err));
  },
  scrape: function(req, res) {
    mw.Scrape()
      .then(articles => {
        articles.forEach(element => {
          db.Scraper.findOne({title: element.title}, (error, existingArticle) => {
            if(existingArticle === null) {
              db.Scraper.create(element)
            }  
          })
        })
      }).catch(err => res.status(422).json(err));
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