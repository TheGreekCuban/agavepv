import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import  { ArticleList } from "../../components/ArticleList"


class News extends Component {
  state = {
    news: []
  };

  scrapeArticles = () => {
    API.scrapeArticles()
      .then(news => this.setState({news: news.data}))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.scrapeArticles()
  }

  render() {
    return (
      <main id="news" className="section scrollspy container">
        <h1>More About Newark, NJ</h1>
        <ArticleList news={this.state.news}>
        </ArticleList>
      </main>
    );
  }
}

export default News;

