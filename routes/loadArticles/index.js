const router = require("express").Router();
const newsController = require("../../controllers/newsController")

//Lead routes
router.route("/")
    .get(newsController.loadArticles)

module.exports = router;
