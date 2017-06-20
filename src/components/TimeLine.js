import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import ContainerWork from './Work.js';
import ContainerWorks from './Works.js';
import ContainerFollows from './Follows.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';
import { Modal, Grid, Row, Col } from 'react-bootstrap';

export class TimeLine extends React.Component {
    constructor() {
      super();
      this.state = {
        modalFlag: false
      };
    }
    render() {
      const { works } = this.props;
      const myWorks = works.toJSON().map((work, key) => {
            return (
                <ContainerWork work={work} num={key} key={key} />
            )
        });
        return (
            <div>
                <div className="follow_img_group">
                  <div className="follow_img_box">
                    <img src="../images/photo1.png"/>
                  </div>
                  <div className="follow_img_box">
                    <img src="../images/photo2.png"/>
                  </div>
                  <div className="follow_img_box">
                    <img src="../images/photo3.png"/>
                  </div>
                  <div className="follow_img_box">
                    <img src="../images/photo4.png"/>
                  </div>
                  <div className="follow_img_box">
                    <img src="../images/photo5.png"/>
                  </div>
                  <div className="follow_img_box">
                    <img src="../images/photo6.png"/>
                  </div>
                  <div className="follow_img_box" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>
                    <img src="../images/show_more.png"/>
                  </div>
                </div>
                <ContainerWorks />
                <Modal show={this.state.modalFlag} className="your_follow_modal" >
                  <Modal.Body>
                    <span className="closeButtonFollow" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>×</span>
                    <div className="modal_follow_title">
                      <span>あなたのフォロー一覧</span>
                    </div>
                    <ContainerFollows />
                  </Modal.Body>
                </Modal>
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

const ContainerTimeLine = connect(
    mapStateToProps,
)(TimeLine);

export default ContainerTimeLine;
