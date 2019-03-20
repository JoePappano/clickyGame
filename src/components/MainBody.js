import React, { Component } from 'react';
import Picture from "./Picture";
import { Jumbotron, Col, Row, Container } from 'react-bootstrap';


export class MainBody extends Component {

  render() {
    return (
      <div>
        <div>
        <Jumbotron>
          <h1>Clicky Game</h1>
          <p>
          Click on an image to earn points, but don't click on any more than once!
          </p>
        </Jumbotron>
        {/* <Row>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
        </Row>
        <Row>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
        </Row>
        <Row>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
        </Row>
        <Row>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
          <Col> test </Col>
        </Row> */}

        {/* { this.state.pictures.map((picture) => {
          return { pictures.id };
        })} */}
        </div>
      </div>
    )
  }
}

export default MainBody
