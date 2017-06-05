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
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const store = configureStore();


//Routingの定義
const appRouting = (
  <Router>
      <Layout>
        <Header className="header">ヘッダー</Header>
        <Content>
          <Route exact path="/" component={ContainerRoot}/>
          <Route path="/work" component={ContainerWorks} />
          <Route path="/my_page" component={ContainerMyPage} />
        </Content>
        <Footer>
          <Link to="/work">Work</Link>
          <Link to="/my_page">my page</Link>
        </Footer>
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

// const mapStateToProps = (state) => {
//     const { page } = state;
//     return {
//         page: page
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addList: e => dispatch(addList(e))
//     };
// };
//
// const ContainerBox = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Page);
//
// export default ContainerBox;
