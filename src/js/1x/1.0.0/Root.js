import React from "react";
import { connect } from 'react-redux';


import axios from "axios";



import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import {Dashboard} from './Dashboard.js';







export class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: true
    };
  }

  // componentWillMount() {
  //   axios.get('http://localhost/count')
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
    render() {
      const { redirectToReferrer } = this.state
      if (redirectToReferrer) {
        return (
          <h2>logined</h2>
        )
      }


        return (
          <h2>Home</h2>
        )
    }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/dashboard`}>
          dashboard
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)




const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)

const mapStateToProps = (state) => {
    return {
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
//     };
// };

const ContainerRoot = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Root);

export default ContainerRoot;
