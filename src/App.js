import React, {usetState} from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Containers/Login";
import Registration from "./Containers/Registration";
import './App.css';



function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/login">
      <Login />
      </Route>
      </Switch>
    </div>
  </Router>
);
} 
export default App;
