import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import { MountRoute } from './components/index';
import AuthState from './context/authContext/AuthState';




function App() {
  return (
    <AuthState>
      <Router>
        <MountRoute />
      </Router>
    </AuthState>
  );
}

export default App;
