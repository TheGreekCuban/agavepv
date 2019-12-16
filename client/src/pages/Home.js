import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
  state = {
    Home: []
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Home Should I Read?</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Home On My List</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
