import React, { Component } from "react";
import "./style.css";
import fourtyTwoThird from "../../images/42third.png"


class Portfolio extends Component {
  state = {
    Portfolio: []
  };

  render() {
    return (
      <main id="portfolio" className="section" >
        <h1>Portfolio</h1>
        <img className=" scrollspy" id="fourtyTwoThird" src={fourtyTwoThird} alt="42 Third Street, Newark, NJ"/>
        <div id="propertyDescription"> 
        <p>
          42 3rd Street, Newark, NJ 07107
        </p>
        <p>
           8% Capitalization Rate
        </p>
        <p>
          2 Units
        </p>
        </div>
      </main>
    );
  }
}

export default Portfolio;

