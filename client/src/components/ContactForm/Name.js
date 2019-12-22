import React from "react";

export function Name(props) {
  return (
    <div class="name">
      <div {...props} class="input-field">
        <i class="material-icons prefix">account_circle</i>
        <input id="first_name" type="text" class="validate" />
        <label for="first_name">Full Name</label>
      </div>
    </div>
  );
}
  