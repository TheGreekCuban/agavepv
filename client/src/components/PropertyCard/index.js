import React from "react";
import "./style.css";


//Started to match this component's attributes with the required slots it needs. I think I need to create a JSON file keeping track fo all new properties. Then I need to destructure that object and dynamically create cards.

export function PropertyCard(props) {
  return (
    <div className="section scrollspy" id="propertyDescription">
      <img id={props.id} src={props.src}>{props.name}</img>
      <div className="personalContactInfo">  
        <p>{props.email}</p>
        <p>{props.number}</p>   
      </div>
    </div>
  )
}

//Figure out how to make an onclick so the whole media is clickable and an api call triggers the download.
//<a href={`mailto:${props.email}?subject=We are in nterested In Working Together!`}></a>
//<a href={`tel:{props.number}`}> </a>