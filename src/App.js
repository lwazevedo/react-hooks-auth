import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { SignInSide, Dash, NoMatch, PrivateRouter } from './Components/index';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignInSide} />
        <PrivateRouter exact path='/dash' component={Dash} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
