const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");
const scrapeRoutes = require("./scrape")

// API Routes
router.use("/contact", contactRoutes);
router.use("/scrape", scrapeRoutes)

// If no API routes are hit, send the React app
router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
