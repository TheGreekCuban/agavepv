const sslRedirect = require(`heroku-ssl-redirect`)
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Adds the sslRedirect for https://
app.use(sslRedirect(['production'], 301))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "https://535bc9f9-d802-479c-b38d-bc6110c22e8c.mock.pstmn.io/contact/mail");

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening at http://localhost:${process.env.PORT}`)
})