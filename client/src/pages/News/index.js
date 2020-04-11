import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"


class News extends Component {
  state = {
    News: []
  };

  scrapeArticles = () => {
    API.scrapeArticles().then(response => console.log(response))
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

