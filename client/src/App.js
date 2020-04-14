import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import About from "./pages/About/index.js"
import News from "./pages/News/index.js"
import Contact from "./pages/Contact/index.js"
import "./App.css";
import Portfolio from "./pages/Portfolio/index.js";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <News />
      <Footer />
    </>
  );
}

export default App;