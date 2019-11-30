// startup point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import {
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';
import { withRouter } from 'react-router-dom';
import Router from './Router';
import createRootReducer from './reducers';

import '../assets/styles/index.scss';

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

const MainWithRouter = withRouter(Router);
ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainWithRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
