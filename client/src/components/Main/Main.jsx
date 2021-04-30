import React from "react";
import { Container, Col, Row } from 'react-bootstrap'

function Main() {
  return (
    <Container style={{backgroundColor: 'burlywood'}}>
      <Row>
        <Col>Animals</Col>
       
      </Row>
      <Row>
        <Col>History</Col>
        
      </Row>
      <Row>
        <Col>Humans</Col>
       
      </Row>
      <Row>
        <Col>War</Col>
       
      </Row>
    </Container>
  );
}

export default Main;
