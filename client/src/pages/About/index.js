import React, { Component } from "react";
import goulet from "../../images/alexandre.jpeg"
import vellios from "../../images/alex.jpg"
import nwrk from "../../images/newark.jpg"
import "./style.css";


class About extends Component {
  state = {
    About: []
  };

  render() {
    return (
        <main className="about">
          <h1 className="title">Agave Property Ventures</h1>
          <img id="skyline" alt="Newark NJ Skyline" src={nwrk}/>
          <div id="intro">
            <p>
              Agave Property Ventures is a real estate development and property management firm located in Newark, NJ. Our mission is to create value for our stakeholders while simultaneously improving the local community.
            </p>
          </div>
          <h1 id="team" className="section scrollspy">The Team</h1>
          <div className="aboutG">
            <img id="pageImages" src={goulet} alt="Alexandre Goultet"/>
            <p>Alexandre Goulet | Founder</p> 
            <p className="background">  
              Alexandre has been working as a real estate broker in New York City since January 2016. Since then, he has completed over $35,000,000 in transactions. In addition, he has been exposed to various aspects of property management through the creation of Whale Management LLC, a fully integrated Investment and Management firm with holdings in Queens, NY . Alexandre graduated from Bishop’s University, in Canada,  with a major in Finance.
            </p>
          </div>
          <div className="aboutV" >
          <img id="pageImages" src={vellios} alt="Alexander Vellios"/>
            <p >Alexander Vellios | Founder & Web Developer</p> 
            <p className="background">
              Alexander has been involved in the Real Estate Industry since 2015. As a commercial leasing broker he successfully leased and subleased over 10,000 square feet of New York City Proper prime retail space in just under two years. In 2017, Alexander was named as one of New York City’s Dealmakers of the year by The New York Times. Since co-founding Agave Property Ventures, Alexander has shifted his focus to aquisitions and property management in the Newark, NJ market. 
            </p>
            <p className="background">  
              In June 2019, Alexander began a second role at APV as the compnay's Web Application Developer. He has since designed and built the corporate website in addition to a backend API that has automated all of Agave Property Venture's underwriting, saving the company approximately $60,000 per annum. 
            </p>
          </div>   
        </main>
    );
  }
}

export default About;

