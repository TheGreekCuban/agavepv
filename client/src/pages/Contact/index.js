import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/ContactForm";
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
      <main>
          <form>
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name (required)"
            />
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Email (required)"
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

      </main>
    );
  }
}

export default Contact;

