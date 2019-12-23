import React, { Component } from "react";
import API from "../../utils/API";
import { Email, TextArea, FormBtn, Phone, Name } from "../../components/ContactForm";
import "./style.css";


class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      console.log(event.target.name)
      console.log(this.state)
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, use the API.saveLead method to save the lead data
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.name && this.state.email) {
        API.saveLead({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
        .then(res => this.setState({ name: "", email: "", message: ""}))
        .catch(err => console.log("error happening here"));
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
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name"
            />
            <Phone
              value={this.state.email}
              onChange={this.handleInputChange}
              name="phone"
              placeholder="Phone Number"
            />
            <Email
              value={this.state.message}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Email"
            />
            <TextArea
              value={this.state.message}
              onChange={this.handleInputChange}
              name="message"
              placeholder="Message (Optional)"
            />
            <FormBtn
              disabled={!(this.state.name && this.state.email)}
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </div>
      </main>
    );
  }
}

export default Contact;

