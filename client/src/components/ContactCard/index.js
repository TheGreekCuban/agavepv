import React from "react";
import "./style.css";

export function VCard(props) {
  return (
    <a className={`${props.label} contactCard`} href={props.file} download={`${props.name} V-Card`}>
      <h5 className="names">{props.name}</h5>
      <div className="personalContactInfo">  
        <p>{props.email}</p>
        <p>{props.number}</p>   
      </div>
    </a>
  )
}

//Figure out how to make an onclick so the whole media is clickable and an api call triggers the download.
//<a href={`mailto:${props.email}?subject=We are in nterested In Working Together!`}></a>
//<a href={`tel:{props.number}`}> </a>