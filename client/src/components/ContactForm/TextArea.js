import React from "react";

export function TextArea(props) {
  return (
    <div className="message">
      <div {...props} className="input-field">
        <i className="material-icons prefix">message</i>
        <textarea id="textarea" className="materialize-textarea"></textarea>
        <label htmlFor="textarea">Message</label>
      </div>
    </div>
  );
}
