import React from "react";

export const Email = props => {
  return (
    <div className="email">
      <div  className="input-field">
        <i className="material-icons prefix">email</i>
        <input id="email" type="email" {...props} className="validate" />
        <label htmlFor="email">Email</label>
      </div>
    </div>
  );
}
