import React from "react";
import "./style.css"
import { Article } from "../Articles"

export const ArticleList = props => {
    return (
        <div className="row">
          <div className="col s12 m7 l4">
          {props.news.length ? props.news.map(article => (
            <Article key={article._id} article={article}></Article>
          )) : (
            <h3>Check back later for updates!</h3>
          )}
          </div>
        </div>
    )
}