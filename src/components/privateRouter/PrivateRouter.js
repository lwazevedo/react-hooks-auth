import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthContext from '../../context/authContext/AuthContext';
import PermissionRoute from './PermissionRoute';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route {...rest} render={props => user ? (
      <PermissionRoute {...props} component={Component} user={user} />
    ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    } />
  );
};

export default PrivateRouter;
