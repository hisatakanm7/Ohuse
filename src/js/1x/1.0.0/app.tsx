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
import ContainerHeader from './Projects/Ofuse/Common/Header';
import ContainerFooter from './Projects/Ofuse/Common/Footer';
import ContainerModalRoot from './Common/Components/ModalComponents/ModalRoot'
import ContainerTimeLine from './Projects/Ofuse/Home/TimeLine'
import ContainerMyPage from './Projects/Ofuse/MyPage/MyPage'
import ContainerSearch from './Projects/Ofuse/Search/Search'
import ContainerUser from './Projects/Ofuse/MyPage/User'
import { comfirmLoggedIn } from './Redux/Action/action';

const store = configureStore();

export interface Props {
  comfirmLoggedIn: any;
}

class App extends React.Component <Props, object> {
  componentWillMount() {
    this.props.comfirmLoggedIn();
  }
  render() {
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
    );
  }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
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
