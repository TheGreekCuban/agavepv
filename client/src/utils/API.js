import axios from "axios";
//import { request, response } from "express";

export default {

  // Saves a contact info and messaege to the database
  saveLead: function(leadData) {
    return axios.post("/contact/lead", leadData);
  },

  sendMail: function(mailData) {
    return axios.post("/contact/mail", mailData);
  },

  scrapeArticles: function() {
    return axios.get("/scrape", (request, response) => {
      console.log("Response frontend: ", response)
    })
  }
};
