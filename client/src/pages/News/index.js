import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import  { Articles, SingleArt } from "../../components/Articles"


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
        <Articles>
          {this.state.news.length ? this.state.news.map(article => (
            <SingleArt key={article.title} title={article.title} link={article.link} image={article.image}>
            </SingleArt>
          )) : (
            <h3>Check back later for updates!</h3>
          )}
        </Articles>
      </main>
    );
  }
}

export default News;

