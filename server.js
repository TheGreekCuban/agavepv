const sslRedirect = require(`heroku-ssl-redirect`)
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/agavepv"
const db = mongoose.connection

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => console.log(`Connected to mongoose!`))


// Add routes, both API and view
app.use(routes);

// Adds the sslRedirect for https://
app.use(sslRedirect(['production'], 301))

app.listen(PORT, function(){
    console.log(`Server is listening at http://localhost:${PORT}/`)
})