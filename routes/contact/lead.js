const router = require("express").Router();
const leadController = require("../../controllers/leadController");


// Matches with "/contact/leads"
router.route("/")
.get(leadController.findAll)
.post(leadController.create);

// Matches with "/api/leads/:id"
// router
//   .route("/:id")
//   .get(leadController.findById)
//   .put(leadController.update)
//   .delete(leadController.remove);

module.exports = router;
