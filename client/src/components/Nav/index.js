import React, { Component } from "react";
import Logo from "../../../src/images/logo.png"
import "./style.css";

class Nav extends Component {
  componentDidMount() {
    const M = window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(elems, {});
    });
  }

  render() {
    return (
      <header>
        <nav>          
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i id="hamburger" className="material-icons"><strong>menu</strong></i></a>
          <a href="/" id="logo"><img id="logo" src={Logo} alt="logo"/></a>
          <ul id="nav-mobile">
            <li><a id="navL" href="#team">Team</a></li>
            <li><a id="navL" href="#criteria">Acquisition Criteria</a></li>
            <li><a id="navL" href="#portfolio">Portfolio</a></li>
            <li><a id="navL" href="#contact">Contact</a></li>            
          </ul>
      </nav>

      <ul className="sidenav" id="mobile-demo">
      <a href="/" className="brand-logo"><img className="responsive-img" id="sNavLogo" src={Logo} alt="logo"/></a>
        <li><a href="#about">About</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#criteria">Acquisition Criteria</a></li>
        <li><a href="#portfolio">Portfolio</a></li>    
        <li><a href="#contact">Contact</a></li>
        <li><a href="#vCs">V-Cards</a></li>
      </ul> 
    </header>
    );
  }
}

export default Nav;

