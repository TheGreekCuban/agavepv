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
        <main className="section scrollspy" id="about">
          <h1>Agave Property Ventures</h1>
          <div className="divider"></div>
          <div className="responsive-img hide-on-small-only"><img id="skyline" alt="Newark NJ Skyline" src={nwrk}/></div>
          <div id="intro">
            <p>
              Agave Property Ventures is a real estate development and property management firm located in Newark, NJ. Our mission is to create value for our stakeholders while simultaneously improving the local community.
            </p>
          </div>
          <h1 id="team" className="section scrollspy">The Team</h1>
          <div className="aboutUs">
            <img id="pageImages" src={goulet} alt="Alexandre Goultet"/>
            <p className="center">Alexandre Goulet | Founder</p> 
            <p>  
              Alexandre has been working as a real estate broker in New York City since January 2016. Since then, he has completed over $35,000,000 in transactions. In addition, he has been exposed to various aspects of property management through the creation of Whale Management LLC, a fully integrated Investment and Management firm with holdings in Queens, NY . Alexandre graduated from Bishop’s University, in Canada,  with a major in Finance.
            </p>
          </div>
          <div className="aboutUs" >
          <img id="pageImages" src={vellios} alt="Alexander Vellios"/>
            <p className="center">Alexander Vellios | Strategy, Business Development & Web Developer</p> 
            <p>
              Alexander was born and raised in New York, giving him an in depth understanding of city's myriad sub-markets in addition to the surrounding markets. He attended The University of Delaware's Alfred Lerner College of Business and Economics where he graduated with a BS in Hotel, Restaurant and Institutional Management. Later in 2019 Alexander graduated from a 24 week Web Development Program at Columbia University's Fu Foundation School of Engineering and Applied Science. 
            </p>
            <p>
              Recently, Alexander began a second role at APV as a Web Developer. He has since built the company's corporate website and is continously maintaining and improving the MERN stack application. In addition, as a Strategy and Business Development partner at AGAVE Property Ventures, Alexander focuses on identifying new and exciting acquisition opportunities with a focus in Newark, NJ.  
            </p>
            <p>  
              Before Agave Property Ventures, Alexander was an Associate Director with the Abrams Retail Strategies Team, Compass’ premier retail leasing group where he successfully leased and subleased over 10,000 square feet of New York City Proper prime retail space in just under two years.
            </p> 
            <p>
              In 2016, Alexander was named as one of New York City’s Dealmakers of the year by The New York Times. Since then, Alexander has seen great success with both Landlord and Tenant representation along major fashion corridors in New York City. A few transactions of note include Space NYC Gallery at 428 Broome Street, Zimmerman at 900 Madison Avenue and Unilever’s St. Ives Pop-up at 168 Fifth Avenue.
            </p>
          </div>   
        </main>
    );
  }
}

export default About;

