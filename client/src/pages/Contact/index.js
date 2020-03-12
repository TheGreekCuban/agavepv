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
    prevState: ""
  };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    sendMail = options => {
      API.sendMail(options)
      .then(res => console.log("RES[2]: ", res))
      .catch(err => console.log("[2]err happening here", err.response))
    }

    saveLead = options => {
      API.saveLead(options)        
        .then(res => {
          this.sendMail(options)
          console.log("RES: ", res)
        })
        .then(res => {
          this.setState({ fullName: "", phone: "", email: "", message: "", prevState: res.data})
        })
        .catch(err => {
          console.log("[1]err happening here", err)
        });
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

