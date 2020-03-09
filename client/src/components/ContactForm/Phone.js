import React from "react";

export function Phone(props) {
  return (              
  <div className="phoneNumber">
    <div  className="input-field" >
      <i className="material-icons prefix">phone</i>  
      <input id="icon_telephone" type="tel" {...props} className="validate" />
      <label htmlFor="icon_telephone">Phone Number</label>
    </div>
  </div>
  );
}
