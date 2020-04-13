import React from "react";
import "./style.css"

export const Articles = props => {
    return (
        <div className="row">
          <div className="col s12 m7 l4">
            {props.children}
          </div>
        </div>
    )
}

export const SingleArt = props => {
 return (
      <div className="card">
        <div className="card-image">
          <img alt={props._id} src={props.image}/>
        </div>
        <div className="card-content">
            <h4>{props.title}</h4>
        </div>
        <div className="card-action">
          <a href={props.link}>Read More...</a>
        </div>
      </div>       
 )   
}