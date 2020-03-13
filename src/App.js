import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { SignInSide, Dash, NoMatch, PrivateRouter, Home } from './components/index';
import AuthState from './context/authContext/AuthState';

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/login' component={SignInSide} />
          <PrivateRouter exact path='/' component={Home} />
          <PrivateRouter exact path='/dash' component={Dash} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
