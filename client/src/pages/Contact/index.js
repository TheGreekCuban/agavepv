import React, { Component } from "react";
import API from "../../utils/API";
import { Email, TextArea, FormBtn, Phone, Name } from "../../components/ContactForm";
import { VCards } from "../../components/ContactCard/index.js";
import "./style.css";


class Contact extends Component {
    state = {
      fullName: "",
      phone: "",
      email: "",
      message: ""
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    //Need a function that will call the api sendmail method and activate nodemailer
    sendMail = options => {
      API.sendMail(options)
      .then(response => console.log("sendMail Response: ", response.status))
      .catch(err => console.log("sendMail error here", err))
    }

    //Need a function that will call the api.saveLead method and save the lead to the db
    saveLead = options => {
      API.saveLead(options)        
        .then(res => {
          this.sendMail(options)
        })
        .catch(err => console.log("saveLead error: ", err))
        .finally(() => this.setState({ fullName: "", phone: "", email: "", message: ""}))
    }

    handleFormSubmit = event => {
      event.preventDefault();

      let options = {
        Name: this.state.fullName,
        Email: this.state.email,
        Phone: this.state.phone,
        Message: this.state.message
      }

      if (this.state.fullName && this.state.email) {
        this.saveLead(options)
      }
    };

  render() {
    return (
      <main id="contact" className="section scrollspy container"> 
        <div className="title"></div><h1>Contact Us</h1>
        <div className="divider"></div>
        <div className="row">
          <form className="col s12">
            <Name
              value={this.state.fullName}
              onChange={this.handleInputChange}
              name="fullName"
            />
            <Phone
              value={this.state.phone}
              onChange={this.handleInputChange}
              name="phone"
            />
            <Email
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            />
            <TextArea
              value={this.state.message}
              onChange={this.handleInputChange}
              name="message"
            />
            <FormBtn
              disabled={!(this.state.fullName && this.state.email)}
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </div>
        <VCards />
      </main>
    );
  }
}

export default Contact;

