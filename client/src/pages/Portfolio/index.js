import React from "react";
import "./style.css";
import fourtyTwoThird from "../../images/42third.png"


const Portfolio = () => {
 
    return (
      <main className="portfolio" >
        <div className="port">
          <h1>Portfolio</h1>
          <div className="section scrollspy" id="propertyDescription">
          <img id="fourtyTwoThird" src={fourtyTwoThird} alt="42 Third Street, Newark, NJ"/>
          <p>
            42 3rd Street, Newark, NJ 07107
            <br></br>8% Capitalization Rate
            <br></br>2 Units
          </p>
          </div>
        </div>
        <div id="criteria" className="section scrollspy">
            <h1>Acquisition Criteria</h1>
            <p>
              Size: 5 to 15 Units
              <br></br>Location: Newark, NJ
              <br></br>Price: $350,000 to $1,500,000
              <br></br>Rehab, Value Add & Core Opportunities
            </p>
        </div>
      </main>
    );
  }

  export default Portfolio;
