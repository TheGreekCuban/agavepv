import React from "react";
import "./style.css";

export function VCards(props) {
  return (
      <div className="row center-align">
      <h2>Download Our V-Cards!</h2>
      <div className="card col l5" id="alexG">
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
      <div className="card col l5" id="alexV">
        <div className="card-content">
          <a id="actionButton" href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="personalContactInfo">
            <h3>Alexander Vellios</h3>
            <div className="divider"></div>
            <p><a href="mailto:av@agavepv.com?subject=We are in nterested In Working Together!">AV@AGAVEPV.COM</a></p>
            <p><a href="tel:914-584-8351">914-584-8351</a></p>
          </div>
        </div>
      </div>
      </div>
  );
}
