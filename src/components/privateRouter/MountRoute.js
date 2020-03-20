import React from 'react';
import { Route, Switch } from "react-router-dom";

import routes from '../routes';
import { PrivateRouter } from '../index'
import Container from '../../layouts/Container';

const MountRoute = () => {
  const routesPrivate = routes.filter(r => r.private);
  const routesPublic = routes.filter(r => !r.private);
  return (
    <Switch>
      {routesPublic.map((r, key) => (<Route exact {...r} key={key} />))}
      <Container>
        <Switch>
          {routesPrivate.map((r, key) => <PrivateRouter exact {...r} key={key} />)}
        </Switch>
      </Container>
    </Switch>
  )

};

export default MountRoute;