const router = require("express").Router();
const leadRoutes = require("./lead");

// Book routes
router.use("/lead", leadRoutes);

module.exports = router;
