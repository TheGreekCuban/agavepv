import React, { Component } from "react";
import "./style.css";


class About extends Component {
  state = {
    About: []
  };

  componentDidMount = () => {
    console.log("hello")
  }
  render() {
    return (
      <main id="about" className="section scrollspy">
        <div className="description">
        <h1>About Agave Property Ventures</h1>
          <p>We are a real estate development and property management firm located in Newark, NJ. Our mission is to create value for our stakeholders while simultaneously improving the local community.
          </p>
        </div>
      </main>
    );
  }
}

export default About;

