require('es6-promise').polyfill();
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import styles from '../../../scss/1x/1.0.0/index.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configureStore.js'

import ContainerHeader from './Common/components/Header.js';
import ContainerFooter from './Common/components/Footer.js';
import ContainerModalRoot from './Common/components/ModalRoot.js'
import ContainerTimeLine from './Common/components/TimeLine.js'
import ContainerMyPage from './Common/components/MyPage.js'
import ContainerSearch from './Common/components/Search.js'
import ContainerUser from './Common/components/User.js'
import { comfirmLoggedIn, receiveLoggedIn, followUser } from './Redux/Action/action';

const store = configureStore();

class App extends React.Component {
  componentWillMount() {
    this.props.comfirmLoggedIn();
  }
  render() {
    const { receiveLoggedIn, comfirmLoggedIn, user } = this.props;
    const userId = user.toJSON().info.id;
      return (
        <Router>
          <MuiThemeProvider>
            <div>
              <ContainerHeader />
              <ContainerModalRoot />
              <Route exact path="/" component={ContainerTimeLine}/>
              <Route path="/work" component={ContainerMyPage}/>
              <Route path="/search" component={ContainerSearch}/>
              <Route path="/user" component={ContainerUser}/>
              <Route path="/creators/:creatorId" component={ContainerUser} />
              <ContainerFooter />
            </div>
          </MuiThemeProvider>
        </Router>
      )
  }
}

const mapStateToProps = (state) => {
    const { works, user } = state;
    return {
        works: works,
        user: user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      receiveLoggedIn: (e) =>  dispatch(receiveLoggedIn(e)),
      comfirmLoggedIn: (e) =>  dispatch(comfirmLoggedIn(e)),
      followUser: (usrId, other_user_id) => dispatch(followUser(usrId, other_user_id)),
    };
};

const ContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

ReactDom.render((
    <Provider store={store}>
        <ContainerApp />
    </Provider>
), document.getElementById('root'));
