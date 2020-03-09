const router = require("express").Router();
const leadRoutes = require("./lead");
//const mailRoutes = require("./mail");

//Lead routes
router.use("/lead", leadRoutes);

//Mail routes
//router.use("/mail", mailRoutes);

module.exports = router;
