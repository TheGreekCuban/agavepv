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
    message: "",
  };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    saveLead = () => {
       API.saveLead({
          Name: this.state.fullName,
          Email: this.state.email,
          Phone: this.state.phone,
          Message: this.state.message
        })        
        .then(res => this.sendMail())
        .catch(err => console.log("[1]error happening here"));
    }

    sendMail = () => {
      API.sendMail({
          Name: this.state.fullName,
          Email: this.state.email,
          Phone: this.state.phone,
          Message: this.state.message
          })
          .then(res => this.setState({ fullName: "", phone: "", email: "", message: ""}))
          .catch(err => console.log("[2]error happening here"));
    }

    // When the form is submitted, use the API.saveLead method to save the lead data
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.fullName && this.state.email) {
        this.saveLead();
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

