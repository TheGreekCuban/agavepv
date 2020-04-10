import React, { Component } from "react";
import "./style.css";


class News extends Component {
  state = {
    News: []
  };

  render() {
    return (
      <main id="news" className="section scrollspy container">
        <h1>More About Newark, NJ</h1>
        <button type="submit"><a href="/scrape/">SCRAPE</a></button>
      </main>
    );
  }
}

export default News;

