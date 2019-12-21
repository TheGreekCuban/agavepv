import axios from "axios";

export default {

  // Saves a contact info and messaege to the database
  saveLead: function(leadData) {
    return axios.post("/contact/lead", leadData);
  }
};
