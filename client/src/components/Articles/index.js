import React from "react";


export const Article = props => {
    return (
         <div className="cardContainer">
           <div className="cardImage">
             <img alt={props.article._id} src={props.article.image}/>
           </div>
           <div className="cardContent">
               <p><strong>{props.article.title}</strong></p>
           </div>
           <div className="cardAction">
             <a href={props.article.link}>Read More</a>
           </div>
         </div>       
    )   
   }