import React, { Component } from "react";
import "./style.css";
import IG from "../../images/insta.png"
import FB from "../../images/facebook.png"
import LI from "../../images/linkedin.png"
import TWTTR from "../../images/twitter.png"

class Footer extends Component {

  componentDidMount() {
    const M = window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
        <footer>
                    <div className="iconLeft">
                      <a href="https://twitter.com/AgavePV"><img id="smIcon" alt="Twitter" src={TWTTR}/></a>
                      <a href="https://www.instagram.com/agavepv/" target=" "><img id="smIcon" alt="Instagram" src={IG}/></a>  
                    </div>
                    <div className="iconRight">
                      <a href="https://www.facebook.com/pg/agavepv/"><img id="smIcon" alt="Facebook" src={FB}/></a>
                      <a href="https://www.linkedin.com/company/agavepv/"><img id="smIcon" alt="LinkedIn" src={LI}/></a>  
                    </div>
                    <div className="copyright">© 2020 Copyright Agave Property Ventures</div>
        </footer>

    )
  }
}

export default Footer;

