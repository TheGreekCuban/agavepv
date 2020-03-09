import React from "react";

export function TextArea(props) {
  return (
    <div className="message">
      <div className="input-field">
        <i className="material-icons prefix">message</i>
        <textarea id="textarea" {...props}  className="materialize-textarea"></textarea>
        <label htmlFor="textarea">Message</label>
      </div>
    </div>
  );
}
