import React, { Component } from "react";
import "./style.css"
import { Article } from "../Articles"
import API from "../../utils/API"


export class ArticleList extends Component {

  scrapeArticles = () => {
    API.scrapeArticles()
      .then(news => this.setState({news: news.data}))
      .catch(error => console.log(error))
  }
  

  render() {
    return (
      <div className="articleList">
        {this.props.news.length ? this.props.news.map(article => (
          <Article key={article.title} article={article}></Article>
        )) : (
          this.scrapeArticles()
        )}
      </div>
    )
  }
}