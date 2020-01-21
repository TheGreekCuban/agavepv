const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");

// API Routes
router.use("/contact", contactRoutes);

//Cert Route
router.get("/.well-known/acme-challenge/aC06-CSzO3s4ANyxx5ARsIXo7LOFoAyvwCl_lMHXI_I", function(request, response){ 
  response.send("aC06-CSzO3s4ANyxx5ARsIXo7LOFoAyvwCl_lMHXI_I.afJbyYS_pgF6jTylFrprrYVKIwNMppgpjVIax50nZZM") 
});

// If no API routes are hit, send the React app
router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
