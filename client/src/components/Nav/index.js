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
  }

  render() {
    return (
      <header>
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img className="responsive-img" id="logo" src={Logo} alt="logo"/></a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">News</a></li>
            <li><a href="/criteria">Acquisition Criteria</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">News</a></li>
        <li><a href="/criteria">Acquisition Criteria</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> 
    </header>
    );
  }
}

export default Nav;

