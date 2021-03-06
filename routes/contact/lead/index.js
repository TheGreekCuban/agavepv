const router = require("express").Router();
const Lead = require("../../../controllers/leadController");


// Matches with "/contact/lead"
router.route("/")
.post(Lead.create);

// Matches with "/api/leads/:id"
// router
//   .route("/:id")
//   .get(leadController.findById)
//   .put(leadController.update)
//   .delete(leadController.remove);

module.exports = router;
