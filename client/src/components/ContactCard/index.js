import React from "react";
import "./style.css";

export function VCard(props) {
  return (

      <div className={`${props.label} contactCard`}> 
      <a href={props.file} download={`${props.name} V-Card`}>
          <h5 className="names">{props.name}</h5>
          <div className="personalContactInfo">  
            <p><a href={`mailto:${props.email}?subject=We are in nterested In Working Together!`}>{props.email} </a></p>
            <p><a href={`tel:{props.number}`}> {props.number}</a></p>
         </div>
        </a>
      </div>
  )
}


