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
import Pick from './components/Pick.js';
import ContainerWorks from './components/Works.js';
import ContainerRoot from './Root.js';
import ContainerMyPage from './components/MyPage.js';
import styles from './scss/index.scss'
import { Layout, Icon } from 'antd';
const { Header, Footer, Sider, Content, Menu } = Layout;
const store = configureStore();


//Routingの定義
const appRouting = (
  <Router>
      <Layout>
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
        <Content>
          <Route exact path="/" component={ContainerRoot}/>
          <Route path="/work" component={ContainerWorks} />
          <Route path="/my_page" component={ContainerMyPage} />
        </Content>
        <div id="footer">
          <Link to="/work"><Icon type="home" /></Link>
          <Link to="/work"><Icon type="user" /></Link>
          <Link to="/work"><Icon type="bars"  style={{color: 'red'}}/></Link>
        </div>
      </Layout>
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
