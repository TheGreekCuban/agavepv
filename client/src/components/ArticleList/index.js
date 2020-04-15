import React from "react";
import "./style.css"
import { Article } from "../Articles"

export const ArticleList = props => {
    return (
          <div className="articleList">
          {props.news.length ? props.news.map(article => (
            <Article key={article.title} article={article}></Article>
          )) : (
            <h3>Check back later for updates!</h3>
          )}
          </div>
    )
}