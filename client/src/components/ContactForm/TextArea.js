import React from "react";

export function TextArea(props) {
  return (
    <div class="message">
      <div {...props} class="input-field">
        <i class="material-icons prefix">message</i>
        <textarea id="textarea" class="materialize-textarea"></textarea>
        <label for="textarea">Message</label>
      </div>
    </div>
  );
}
