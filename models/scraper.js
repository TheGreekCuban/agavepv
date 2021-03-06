const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ScraperSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required type String
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }],
  date: { 
    type: Date, 
    default: Date.now 
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
const Scraper = mongoose.model("Scraper", ScraperSchema);

// Export the Article model
module.exports = Scraper;
