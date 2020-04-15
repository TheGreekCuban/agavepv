import axios from "axios";

export default {

  // Saves a contact info and messaege to the database
  saveLead: function(leadData) {
    return axios.post("/contact/lead", leadData);
  },

  //Sends the info to admin using nodemailer
  sendMail: function(mailData) {
    return axios.post("/contact/mail", mailData);
  },
  //Fires a cheerio.js scraper to return recent articles about newark and display them in our news section
  scrapeArticles: function() {
    return axios.get("/scrape", (request, response) => {
      console.log(`Response frontend: ${response}`)
    })
  },
  //Need a route that can load articles so we don't have to continuously scrape everytime the home route is hit
  loadArticles: function() {
    return axios.get("/loadarticles", (request, response) => {
      console.log("Load Articles: ", response)
    })
  }
};
