import React from "react";
import Cabinet from '../cabinet/cabinet'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from "../Game/Game";




function Main() {
  return (
    <>
      <div>
       
        <Router>
          <Switch>
            <Route exact path="/">
              <Cabinet />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>



          </Switch>

        </Router>
      </div>
    </>
  );
}

export default Main;
