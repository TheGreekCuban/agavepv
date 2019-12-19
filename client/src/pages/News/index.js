import React, { Component } from "react";
import "./style.css";


class News extends Component {
  state = {
    News: []
  };

  render() {
    return (
      <main>
        <div className="description">
        <h1>Agave Property Ventures</h1>
          <p>A real estate development and property management firm located in Newark, NJ. Our mission is to create value for our stakeholders while simultaneously improving the local community.
          </p>
        </div>
      </main>
    );
  }
}

export default News;

