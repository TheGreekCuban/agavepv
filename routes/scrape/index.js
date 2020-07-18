const router = require("express").Router();
const News = require("../../controllers/newsController")


//Lead routes
router.route("/")
    .get(News.scrape)

module.exports = router;