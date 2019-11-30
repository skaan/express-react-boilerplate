import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

const Main = () => {
  return (
    <Switch>
      <Route path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Redirect to="/" />
    </Switch>
  );
};

const mapToProps = () => {
  return {};
};

export default connect(mapToProps, {})(Main);
