import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"


class News extends Component {
  state = {
    News: []
  };

  scrapeArticles = () => {
    API.scrapeArticles()
      .then(news => console.log("News Article Data: ", news))
  }

  componentDidMount() {
    this.scrapeArticles()
  }

  render() {
    return (
      <main id="news" className="section scrollspy container">
        <h1>More About Newark, NJ</h1>
      </main>
    );
  }
}

export default News;

