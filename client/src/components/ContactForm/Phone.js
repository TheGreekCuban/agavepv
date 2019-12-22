import React from "react";

export function Phone(props) {
  return (              
  <div class="phoneNumber">
    <div {...props} class="input-field">
      <i class="material-icons prefix">phone</i>  
      <input id="icon_telephone" type="tel" class="validate"/>
      <label for="icon_telephone">Phone Number</label>
    </div>
  </div>
  );
}
