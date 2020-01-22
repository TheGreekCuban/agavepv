const sslRedirect = require("heroku-ssl-redirect")
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') { 
// Serve up static assets (usually on heroku)
  app.use(express.static("client/build"))
  app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else { next() }
  })
}


// Add routes, both API and view
app.use(routes);

// Adds the sslRedirect for https://
//app.use(sslRedirect(['production'], 301))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/agavepv");


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})