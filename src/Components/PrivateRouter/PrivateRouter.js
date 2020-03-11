import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const auth = false;
  return (
    <Route {...rest} render={props => auth ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )} />
  );
};

export default PrivateRouter;