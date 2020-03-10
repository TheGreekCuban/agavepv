const router = require("express").Router();
const leadController = require("../../controllers/leadController");

// Matches with "/contact/mail"
// This is a route where we either go to the lead controller and make the message get sent there, or do the work here.
router.post("/", (req, res) => {
  console.log("req[3]: ", req, "res[3]: ", res)
  leadController.send
});

// Matches with "/api/leads/:id"
// router
//   .route("/:id")
//   .get(leadController.findById)
//   .put(leadController.update)
//   .delete(leadController.remove);

module.exports = router;
