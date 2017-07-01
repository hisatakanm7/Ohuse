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
import ContainerRoot from './Root.js';
import Work from './components/Work.js';
import styles from './scss/index.scss'
import axios from "axios";
import { comfirmLoggedIn, receiveLoggedIn } from './action';

const store = configureStore();

class App extends React.Component {
  componentWillMount() {
    this.props.comfirmLoggedIn();
  }

    render() {
      const { addList, receiveLoggedIn, comfirmLoggedIn } = this.props;
        return (
          <Router>
            <MuiThemeProvider>
              <div>
              <button onClick={() => comfirmLoggedIn()}>
                onClick
                </button>
                <ContainerHeader />
                <Route exact path="/" component={ContainerTimeLine}/>
                <Route path="/work" component={ContainerMyPage}/>
                <div id="footer">
                  <Link to="/work">home</Link>
                  <Link to="/">user</Link>
                  <Link to="/">bars</Link>
                </div>
              </div>
            </MuiThemeProvider>
          </Router>
        )
    }
}

const mapStateToProps = (state) => {
    const { works } = state;
    return {
        works: works
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addList: (e) =>  dispatch(addList(e)),
      receiveLoggedIn: (e) =>  dispatch(receiveLoggedIn(e)),
      comfirmLoggedIn: (e) =>  dispatch(comfirmLoggedIn(e))
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
