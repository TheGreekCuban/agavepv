const router = require("express").Router();
const leadController = require("../../controllers/leadController");

// Matches with "/api/leads"
router.route("/")
  .post(leadController.create);

// Matches with "/api/leads/:id"
// router
//   .route("/:id")
//   .get(leadController.findById)
//   .put(leadController.update)
//   .delete(leadController.remove);

module.exports = router;
