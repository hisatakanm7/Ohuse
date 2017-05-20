require('es6-promise').polyfill();
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, Link } from "react-router";

import { addList } from './action.js';
import configureStore from './configureStore.js'
import Pick from './components/Pick.js';
// import Page from './components/Page.jsx';
// import PageId from './components/PageId.jsx';
import Login from './Login.js';

const store = configureStore();

//Routingの定義
const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
          <Route path="login" component={Login} />
          <Route path="pick" component={Pick} />
        </Route>
    </Router>
);

//Routingの初期化
if (!location.hash.length) {
    location.hash = "#/login";
}

ReactDom.render((
    <Provider store={store}>
        {appRouting}
    </Provider>
), document.getElementById('root'));

const mapStateToProps = (state) => {
    const { page } = state;
    return {
        page: page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: e => dispatch(addList(e))
    };
};

const ContainerBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default ContainerBox;
