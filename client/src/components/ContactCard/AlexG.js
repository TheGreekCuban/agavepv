import React from "react";
import alexG from "../../images/alexandre.jpeg"

export function AlexG(props) {
  return (
    <div className="col s12 m6 l3">
      <div className="card" id="alexG">
        <div className="card-image">
          <img id="cImg" style={{maxHeight:327.43}}src={alexG}/>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
      </div>
  );
}
