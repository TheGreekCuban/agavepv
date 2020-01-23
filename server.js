const sslRedirect = require("heroku-ssl-redirect")
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(sslRedirect(['production', 'development', 'other'], 301))
  //app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Adds the sslRedirect for https://


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/agavepv");

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})