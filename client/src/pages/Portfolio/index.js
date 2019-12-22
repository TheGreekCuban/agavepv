import React, { Component } from "react";
import "./style.css";


class Portfolio extends Component {
  state = {
    Portfolio: []
  };

  render() {
    return (
      <main id="portfolio" className="section scrollspy">
        <div className="description">
        <h1>Portfolio</h1>
        </div>
      </main>
    );
  }
}

export default Portfolio;

