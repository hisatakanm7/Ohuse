import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import Work from './Work.js';
import myPageStyles from '../scss/myPage.scss';

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
            <div className="profile_box">
              <div className="profile_box_icon">
                <img src="../images/photo1.png"/>
              </div>
              <div className="profile_box_text">
                <div className="profile_name_and_id">
                  <span className="profile_name">
                    { info.name }
                  </span>
                  <span className="profile_id">
                    { info.TwID }
                  </span>
                </div>
                <div className="profile_description">
                  <span>
                    { info.description }
                  </span>
                </div>
              </div>
            </div>
            <div className="profile_select">
              <div className="profile_select_box">
                <span  className="profile_select_begin">
                  自分の予定
                </span>
                <span>
                  フォロー
                </span>
                <span className="profile_select_end">
                  フォロワー
                </span>
              </div>
            </div>
            <div className="width90">
              { myWorks }
            </div>
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

const ContainerMyPage = connect(
    mapStateToProps,
)(MyPage);

export default ContainerMyPage;
