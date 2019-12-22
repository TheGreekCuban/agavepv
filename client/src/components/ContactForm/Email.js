import React from "react";

export function Email(props) {
  return (
    <div class="email">
      <div {...props} class="input-field">
        <i class="material-icons prefix">email</i>
        <input id="email" type="email" class="validate" />
        <label for="email">Email</label>
      </div>
    </div>
  );
}
