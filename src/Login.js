import React from "react";
import { Link, hashHistory } from "react-router";
import axios from "axios";

export default class Login extends React.Component {
  componentWillMount() {
    axios.get('http://localhost/count')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
            </div>
        )

    }
}
