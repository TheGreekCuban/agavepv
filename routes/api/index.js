const router = require("express").Router();
const leadRoutes = require("./lead");

//Lead routes
router.use("/lead", leadRoutes);

module.exports = router;
