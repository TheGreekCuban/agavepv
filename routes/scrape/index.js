const router = require("express").Router();
const leadController = require("../../controllers/leadController")


//Lead routes
router.route("/")
    .get(leadController.scrape)

module.exports = router;
