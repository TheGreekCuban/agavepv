import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index.js";
import NoMatch from "./pages/NoMatch/index.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import About from "./pages/About/index.js"
import News from "./pages/News/index.js"
import Criteria from "./pages/Criteria/index.js"
import Contact from "./pages/Contact/index.js"
import "./App.css";

function App() {
  return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/criteria" component={Criteria} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
  );
}

export default App;


/*
Alexandre Goulet, Founder 

(212) 920-7658 - ag@agavepv.com

Alexandre has been working as a real estate broker in New York City since January 2016. Since then, he has completed over $35,000,000 in transactions. In addition, he has been exposed to various aspects of property management through the creation of Whale Management LLC, a fully integrated Investment and Management firm with holdings in Queens, NY . Alexandre graduated from Bishop’s University, in Canada,  with a major in Finance.

Alexander Vellios, Founder  

(914) 584-8351 - av@agavepv.com

Alexander was born and raised in New York, giving him an in depth understanding of city's myriad sub-markets in addition to the surrounding markets. He attended The University of Delaware's Alfred Lerner College of Business and Economics where he graduated with a BS in Hotel, Restaurant and Institutional Management. 

Prior to being accepted into Columbia University's Web Development Program, Alexander was an Associate Director with the Abrams Retail Strategies Team, Compass’ premier retail leasing group. Before he joined Abrams Retail Strategies he worked for Pyramid Management Group, developers and owners of 17 market-dominating malls throughout the Northeast. At PMG he focused on business development on behalf of the landlord. 

In 2016, Alexander was named as one of New York City’s Dealmakers of the year by The New York Times. Since then, Alexander has seen great success with both Landlord and Tenant representation along major fashion corridors in New York City. A few transactions of note include Space NYC Gallery at 428 Broome Street, Zimmerman at 900 Madison Avenue and Unilever’s St. Ives Pop-up at 168 Fifth Avenue. 


Size: 5 to 15 Units

Location: Newark, NJ

 Price: $350,000 to $1,500,000

Deal Type: Rehab,  Value Add & Core Opportunities
*/