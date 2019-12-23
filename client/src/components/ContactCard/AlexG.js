import React from "react";
import "./style.css";

export function AlexG(props) {
  return (
    <main id="cardContainer" className="container center-align">
      <div className="card" id="alexG">
        <div className="card-content">
          <a id="actionButton" href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="personalContactInfo">
            <h3>Alexandre Goulet</h3>
            <div className="divider"></div>
            <p><a href="mailto:ag@agavepv.com?subject=We are in nterested In Working Together!">AG@AGAVEPV.COM</a></p>
            <p><a href="tel:212-920-7658">212-920-7658</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
