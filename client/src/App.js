import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import About from "./pages/About/index.js"
import News from "./pages/News/index.js"
import Contact from "./pages/Contact/index.js"
import API from "./utils/API"
import "./App.css";
import Portfolio from "./pages/Portfolio/index.js";

class App extends Component {

  state = {
    news: []
  };

  scrapeArticles = () => {
    API.scrapeArticles()
      .then(news => this.setState({news: news.data}))
      .catch(error => console.log(error))
  }
  
  loadArticles = () => {
    API.loadArticles()
      .then(news => !news.data.length ? this.scrapeArticles() : this.setState({news: news.data}))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.loadArticles()
  }

  render() {
    return (
      <>
        <Nav />
        <About />
        <Portfolio />
        <Contact />
        <News news={this.state.news} />
        <Footer />
    </>
    );
  }

}

export default App;