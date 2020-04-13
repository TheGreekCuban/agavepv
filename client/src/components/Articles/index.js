import React from "react";


export const Article = props => {
    return (
         <div className="card">
           <div className="card-image">
             <img alt={props.article._id} src={props.article.image}/>
           </div>
           <div className="card-content">
               <p><strong>{props.article.title}</strong></p>
           </div>
           <div className="card-action">
             <a href={props.article.link}>Read More</a>
           </div>
         </div>       
    )   
   }