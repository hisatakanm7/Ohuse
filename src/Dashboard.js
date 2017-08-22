import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';


export const Dashboard = () => (
  <div>
  <Router>
  <div>
  <Link to="/auth">About</Link>
  <Link to="/notauth">About</Link>
  <Route path="/auth" component={Login}/>
  <Route path="/notauth" component={Notauth}/>
  </div>
  </Router>
  </div>
)

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: true
    };
  }

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to="/notauth"/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at </p>
      </div>
    )
  }
}


const Auth = () => (
  <div>
    <h1>Auth</h1>
  </div>
)

const Notauth = () => (
  <div>
    <h1>Notauth</h1>
  </div>
)
