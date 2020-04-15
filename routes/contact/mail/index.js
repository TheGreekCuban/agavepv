const router = require("express").Router();
const Lead = require("../../../controllers/leadController");

// Matches with "/contact/mail"
// This is a route where we either go to the lead controller and make the message get sent there, or do the work here.
router.route("/")
.post(Lead.send)
// Matches with "/api/leads/:id"
// router
//   .route("/:id")
//   .get(Lead.findById)
//   .put(Lead.update)
//   .delete(Lead.remove);

module.exports = router;
