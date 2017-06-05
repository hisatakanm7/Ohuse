import React from "react";
import { connect } from 'react-redux';
import ContainerHeader from './Header.js';

import { Link, hashHistory } from 'react-router-dom'
import axios from "axios";

export class Root extends React.Component {
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
        return (
            <div>
            </div>
        )

    }
}

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
