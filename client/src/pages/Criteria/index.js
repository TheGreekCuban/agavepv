import React, { Component } from "react";
import "./style.css";


class Criteria extends Component {
  state = {
    Criteria: []
  };

  render() {
    return (
      <main id="criteria" className="section scrollspy">
        <div className="description">
        <h1>Acquisition Criteria</h1>
        </div>
      </main>
    );
  }
}

export default Criteria;

