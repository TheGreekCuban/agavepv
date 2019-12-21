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
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.author) {
        API.saveLead({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
          .catch(err => console.log(err));
      }
    };

  render() {
    return (
      <main>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>

      </main>
    );
  }
}

export default Contact;

