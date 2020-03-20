import React from 'react';
import { Route } from 'react-router-dom';
import NoPermission from '../../components/noMatch/NoPermission'


const PermissionRoute = ({ component: Component, ...rest }) => {
  const { roles, user } = rest;
  const userRoleRoute = roles.includes(user.roles);

  if (roles.length === 0) return <Route {...rest} component={Component} />;

  if (roles.length > 0 && userRoleRoute) {
    return <Route {...rest} component={Component} />
  } else {
    return <NoPermission />
  }
};

export default PermissionRoute;