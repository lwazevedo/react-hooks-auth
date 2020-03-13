import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { Button } from '@material-ui/core'

import AuthContext from '../../../context/authContext/AuthContext';

const Home = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const onLogout = () => {
    logout();
    history.push('/');
  }
  return (
    <>
      <p>HOME</p>
      <Button variant="contained" color="primary" onClick={onLogout}>
        logout
      </Button>
    </>
  )
};
export default Home;