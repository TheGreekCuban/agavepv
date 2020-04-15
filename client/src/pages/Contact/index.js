import React, { Component } from "react";
import API from "../../utils/API";
import { Email, TextArea, FormBtn, Phone, Name } from "../../components/ContactForm";
import { VCard } from "../../components/ContactCard/index.js";
import "./style.css";
import aVVc from "../../vellios.vcf"
import aGVc from "../../goulet.vcf";


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
      <main id="contact" > 
          <form className="contactForm section scrollspy">
            <div className="title"><h1>Contact Us</h1></div>
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
          <p id="vCardTitle">Click Below To Download Our V-Cards!</p>
        <VCard name="Alexander Vellios" number="914-584-8351" email="av@agavepv.com" label="der" file={aVVc}/>
        <VCard name="Alexandre Goulet" number="212-920-7658" email="ag@agavepv.com" label="dre" file={aGVc}/>
      </main>
    );
  }
}

export default Contact;

