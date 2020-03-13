import React from 'react';
import NoPermission from '../../components/noMatch/NoPermission'

const PermissionRoute = (props) => {
  const Component = props.component;
  const { roles } = props.user;

  if (roles.length > 0) {
    const isPermission = roles.find(role => role.location === props.location.pathname);
    return isPermission ? <Component {...props} /> : <NoPermission />
  } else {
    return <NoPermission />
  }
};

export default PermissionRoute;