import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthContext from '../../context/authContext/AuthContext';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { userAuthencated } = useContext(AuthContext);
  const auth = userAuthencated();
  return (
    <Route {...rest} render={props => auth ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />
  );
};

export default PrivateRouter;