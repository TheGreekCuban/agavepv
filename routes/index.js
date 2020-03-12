const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");

// API Routes
router.use("/contact", contactRoutes);

// If no API routes are hit, send the React app
router.use(function(request, response) {
  console.log(`Public request route: ${rquest}`)
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
