const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");

// API Routes
router.use("/contact", contactRoutes);

//Cert Route
router.get("/.well-known/acme-challenge/uVl6ax2J0FfvbJf5sdgq1DYZ4nDy-2QzqVzAR2dhrh4", (request, response) => { 
  response.send("uVl6ax2J0FfvbJf5sdgq1DYZ4nDy-2QzqVzAR2dhrh4.afJbyYS_pgF6jTylFrprrYVKIwNMppgpjVIax50nZZM") 
});

// If no API routes are hit, send the React app
router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
