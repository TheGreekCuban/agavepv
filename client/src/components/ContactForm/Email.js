import React from "react";

export function Email(props) {
  return (
    <div className="email">
      <div {...props} className="input-field">
        <i className="material-icons prefix">email</i>
        <input id="email" type="email" className="validate" />
        <label htmlFor="email">Email</label>
      </div>
    </div>
  );
}
