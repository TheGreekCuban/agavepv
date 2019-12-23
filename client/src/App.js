import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import About from "./pages/About/index.js"
//import News from "./pages/News/index.js"
import Criteria from "./pages/Criteria/index.js"
import Contact from "./pages/Contact/index.js"
import "./App.css";
import Portfolio from "./pages/Portfolio/index.js";
import { AlexV, AlexG } from "./components/ContactCard"

function App() {
  return (
    <>
      <Nav />
      <About />
      <Criteria />
      <Portfolio />
      <Contact />
      <AlexG />
      <AlexV /> 
      <Footer />
    </>
  );
}

export default App;