import React, { Component } from "react";
import "./style.css";


class Criteria extends Component {
  state = {
    Criteria: []
  };

  render() {
    return (
      <main id="criteria" className="section scrollspy">
        <h1>Acquisition Criteria</h1>
        <div id="acquisition">
        <p>
          Size: 5 to 15 Units
        </p>
        <p>
          Location: Newark, NJ
        </p>
        <p>
           Price: $350,000 to $1,500,000
        </p>
        <p>
          Deal Type: Rehab,  Value Add & Core Opportunities
        </p>
        </div>
      </main>
    );
  }
}

export default Criteria;

