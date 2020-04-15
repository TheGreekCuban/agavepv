import React from "react";
import "./style.css";
import  { ArticleList } from "../../components/ArticleList"


const News = props => {
    return (
      <main id="news">
        <h1 className="newsTitle section scrollspy">More About Newark, NJ</h1>
        <ArticleList news={props.news}></ArticleList>
      </main>
    );
}

export default News;

