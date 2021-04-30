import React from "react";
import Cabinet from '../cabinet/cabinet'
import {Container,Row,Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Theme from "../Theme/Theme";





function Main() {
  return (
    <>
      <div>
        <div className='board'>
          <Container>
            <Row>
              <Col><Theme /></Col>
            </Row>
            <Row>
              <Col><Theme /></Col>
            </Row>
            <Row>
              <Col><Theme /></Col>
            </Row>
          </Container>
        </div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Cabinet />
            </Route>
            {/* <Route exact path="/signup"> */}
            {/* <SignupForm users={users} /> */}
            {/* </Route> */}
            {/* <Route exact path="/notepads"> */}
            {/* <Notepad notes={notes} /> */}
            {/* </Route> */}
          </Switch>

        </Router>
      </div>
    </>
  );
}

export default Main;
