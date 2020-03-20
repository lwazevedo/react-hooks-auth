import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import AuthContext from '../../context/authContext/AuthContext';
import PermissionRoute from './PermissionRoute';

const PrivateRouter = (props) => {
  const { user } = useContext(AuthContext);
  return (
    user ? <PermissionRoute {...props} user={user} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

  );
};

export default PrivateRouter;
