import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import ContainerWork from './Work.js';
import styles from '../scss/Work.scss'


export class Works extends React.Component {
    render() {
      const { works } = this.props;
      const myWorks = works.toJSON().map((work, key) => {
            return (
                <ContainerWork work={work} num={key} key={key} />
            )
        });
        return (
            <div>
                <div className="mypage-follows">
                    ここにfolowが入る
                </div>
                <div>
                    {myWorks}
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    const { works } = state;
    return {
        works: works
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
//     };
// };

const ContainerWorks = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Works);

export default ContainerWorks;
