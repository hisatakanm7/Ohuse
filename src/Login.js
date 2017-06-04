import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";

export class Login extends React.Component {
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
      const { page } = this.props;
        return (
            <div>
                <h2>{page.toJSON().name}</h2>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    const { page } = state;
    return {
        page: page
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
//     };
// };

const ContainerAppli = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Login);

export default ContainerAppli;
