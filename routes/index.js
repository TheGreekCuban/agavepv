const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");

// API Routes
router.use("/contact", contactRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
