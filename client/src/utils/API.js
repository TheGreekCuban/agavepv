//import axios from "axios";

export default {

  // Saves a contact info and messaege to the database
  saveLead: function(leadData) {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: leadData
    };
    console.log("Lead Data: ", leadData)
    return fetch("/contact/lead", options);
  },

  sendMail: function(mailData) {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: mailData
    };
    console.log("Mail Data: ", mailData)
    return fetch("/contact/mail", options);
  }
};
