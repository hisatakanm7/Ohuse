require('es6-promise').polyfill();
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { addList } from './action.js';
import configureStore from './configureStore.js'
import ContainerWorks from './components/Works.js';
import ContainerFollow from './components/Follow.js';
import ContainerHeader from './components/Header.js';
import ContainerMyPage from './components/MyPage.js';
import ContainerTimeLine from './components/TimeLine.js';
import ContainerFollows from './components/Follows.js';
import Work from './components/Work.js';
import { RouteWithSubRoutes } from './RouteWithSubRoutes.js';
import styles from './scss/index.scss'
const store = configureStore();

const routes = [
  { path: '/work',
    component: ContainerTimeLine
  },
  { path: '/my_page',
    component: ContainerMyPage,
  }
];

//Routingの定義
const appRouting = (
  <Router>
  <MuiThemeProvider>
    <div>
      <ContainerHeader />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      <div id="footer">
        <Link to="/work">home</Link>
        <Link to="/my_page">user</Link>
        <Link to="/work">bars</Link>
      </div>
    </div>
    </MuiThemeProvider>
  </Router>
);

ReactDom.render((
    <Provider store={store}>
        {appRouting}
    </Provider>
), document.getElementById('root'));
