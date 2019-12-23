import React from "react";
import "./style.css";

export function AlexV(props) {
  return (
    <main id="cardContainer" className="container" >
      <div className="card" id="alexV">
        <div className="card-content">
          <a href="#!" id="actionButton" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="personalContactInfo">
            <h3>Alexander Vellios</h3>
            <div class="divider"></div>
            <p><a href="mailto:av@agavepv.com?subject=We are in nterested In Working Together!">AV@AGAVEPV.COM</a></p>
            <p><a href="tel:914-584-8351">914-584-8351</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
