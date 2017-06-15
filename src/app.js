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
} from 'react-router-dom'

import { addList } from './action.js';
import configureStore from './configureStore.js'
import ContainerWorks from './components/Works.js';
import ContainerRoot from './Root.js';
import ContainerMyPage from './components/MyPage.js';
import styles from './scss/index.scss'
const store = configureStore();

//Routingの定義
const appRouting = (
  <Router>
    <div>
      <div className="header">
        <div className="icon_text">
          ○fuse
        </div>
        <div className="header_right">
          <div className="header_right_content">
            <img src="./images/twitter-logo.png"/>
            <div className="header_right_text">
              ログイン/新規登録
            </div>
          </div>
        </div>
      </div>
      <Route exact path="/" component={ContainerRoot}/>
      <Route path="/work" component={ContainerWorks} />
      <Route path="/my_page" component={ContainerMyPage} />
      <div id="footer">
        <Link to="/work">home</Link>
        <Link to="/my_page">user</Link>
        <Link to="/work">bars</Link>
      </div>
    </div>
  </Router>
);


if (!location.hash.length) {
    location.hash = "/work";
}

ReactDom.render((
    <Provider store={store}>
        {appRouting}
    </Provider>
), document.getElementById('root'));
