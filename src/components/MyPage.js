import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { RouteWithSubRoutes } from '../RouteWithSubRoutes.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from "axios";
import Work from './Work.js';
import Works from './Works.js';
import ContainerFollows from './Follows.js';
import myPageStyles from '../scss/myPage.scss';
import { Modal, Grid, Row, Col } from 'react-bootstrap';


export class MyPage extends React.Component {
    constructor() {
      super();
      this.state = {
        indicating: 1,
      };
    }
    render() {
      const { user, match, routes } = this.props;
      const info = user.toJSON().info;
        return (
          <div className="my_page">
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
            <div className="profile_select_box">
              <span className={"profile_select_begin " + (this.state.indicating == 1 ? "selected" : "")} onClick={() => this.setState({indicating: 1})}>
                自分の予定
              </span>
              <span className={(this.state.indicating == 2 ? "selected" : "")} onClick={() => this.setState({indicating: 2})}>
                フォロー
              </span>
              <span className={"profile_select_end " + (this.state.indicating == 3 ? "selected" : "")} onClick={() => this.setState({indicating: 3})}>
                フォロワー
              </span>
            </div>
            <div className="my_page_content_space">
            <Grid>
              <Row>
                <Col xs={12} className={(this.state.indicating !== 1 ? "hidden-xs" : "")}>
                  <Works />
                </Col>
                <Col xs={12} className={(this.state.indicating !== 2 ? "hidden-xs" : "")}>
                  <ContainerFollows method="my_page" />
                </Col>
                <Col xs={12} className={(this.state.indicating !== 3 ? "hidden-xs" : "")}>
                  <ContainerFollows method="my_page" />
                </Col>
              </Row>
            </Grid>
            </div>
          </div>
        )
    }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

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
