import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, Dispatch } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import '../../../scss/1x/1.0.0/index.scss';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configureStore'
import ContainerHeader from './Common/components/Header';
import ContainerFooter from './Common/components/Footer';
import ContainerModalRoot from './Common/components/ModalRoot'
import ContainerTimeLine from './Common/components/TimeLine'
import ContainerMyPage from './Common/components/MyPage'
import ContainerSearch from './Common/components/Search'
import ContainerUser from './Common/components/User'
import { comfirmLoggedIn, receiveLoggedIn } from './Redux/Action/action';

const store = configureStore();

export interface Props {
  comfirmLoggedIn: any;
  receiveLoggedIn: number;
  user: any
}

class App extends React.Component <Props, object> {
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

const mapStateToProps = (state: {works:object, user:object}) => {
    const { works, user } = state;
    return {
        works: works,
        user: user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      receiveLoggedIn: (e: object) =>  dispatch(receiveLoggedIn(e)),
      comfirmLoggedIn: () =>  dispatch(comfirmLoggedIn()),
    };
};

const ContainerApp: any = connect<{}, {}, Props>(
    mapStateToProps,
    mapDispatchToProps,
)(App);

ReactDOM.render((
    <Provider store={store}>
        <ContainerApp />
    </Provider>
), document.getElementById('root'));
