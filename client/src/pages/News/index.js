import React, { Component } from "react";
import "./style.css";


class News extends Component {
  state = {
    News: []
  };

  render() {
    return (
      <div id="news" className="section scrollspy container">
        <h1>More About Newark, NJ</h1>
      </div>
    );
  }
}

export default News;

