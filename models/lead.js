const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: String,
  Message: String,
  Date: { type: Date, default: Date.now }
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
