const express = require('express')
const app = express()
const leadController = require("../../controllers/leadController");

// Matches with "/contact/mail"
// This is a route where we either go to the lead controller and make the message get sent there, or do the work here.
app.post("/", (req, res, next) => {
  console.log(
    ` req[1]: ${JSON.stringify(req.body)}
      res[1]: ${JSON.stringify(res)}
    `
  )
  leadController.send(req, res)
});

// Matches with "/api/leads/:id"
// router
//   .route("/:id")
//   .get(leadController.findById)
//   .put(leadController.update)
//   .delete(leadController.remove);

module.exports = app;
