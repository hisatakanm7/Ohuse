import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import Work from './Work.js';

export class MyPage extends React.Component {
    render() {
      const { user } = this.props;
      const info = user.toJSON().info
      const myWorks = user.toJSON().works.map((work, key) => {
            return (
                <Work work={work} num={key} key={key} />
            )
        });
        return (
            <div>
              <h1>{ info.name }</h1>
              <h2>{ info.TwID }</h2>
              <h2>{ info.description }</h2>
              { myWorks }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user: user
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
//     };
// };

const ContainerMyPage = connect(
    mapStateToProps,
    // mapDispatchToProps
)(MyPage);

export default ContainerMyPage;
