import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Registarion from './components/Registration/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route  path="/login">
          <Login />
        </Route>
        <Route  path="/registration">
          <Registarion />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
