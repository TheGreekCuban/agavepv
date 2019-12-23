import React from "react";

export function Name(props) {
  return (
    <div className="name">
      <div {...props} className="input-field">
        <i className="material-icons prefix">account_circle</i>
        <input id="first_name" type="text" className="validate" />
        <label htmlFor="first_name">Full Name</label>
      </div>
    </div>
  );
}
  