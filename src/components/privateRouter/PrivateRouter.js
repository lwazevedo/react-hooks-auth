import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthContext from '../../context/authContext/AuthContext';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { isAuthencated } = useContext(AuthContext);
  return (
    <Route {...rest} render={props => isAuthencated ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )} />
  );
};

export default PrivateRouter;