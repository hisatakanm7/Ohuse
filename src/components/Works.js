import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import ContainerWork from './Work.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';
import { Modal, Grid, Row, Col } from 'react-bootstrap';

export class Works extends React.Component {
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
                    <img src="../images/photo6.png"/>
                  </div>
                </div>
                <Grid>
                <Row className="follow_works_box1">
                  <Col xs={11} className="follow_works_box">
                    { myWorks }
                  </Col>
                  <Col xs={1} className="selected_follow">
                    <img src="../images/photo1.png"/>
                    <img src="../images/photo2.png"/>
                    <img src="../images/photo6.png"/>
                  </Col>
                </Row>
                </Grid>
                <Modal show={this.state.modalFlag} className="your_follow_modal" >
                  <Modal.Body>
                    <span className="closeButtonFollow" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>×</span>
                    <Grid>
                      <Row>
                        <Col xs={12} className="your_follow_modal_">あなたのフォロー一覧</Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo2.png"/><span>一覧</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo3.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo4.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo5.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo6.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo1.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo2.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo3.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo4.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo5.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo6.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo1.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo2.png"/><span>test</span></Col>
                        <Col xs={2} className="modal_follow_group"><img src="../images/photo3.png"/><span>test</span></Col>
                      </Row>
                    </Grid>
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

const ContainerWorks = connect(
    mapStateToProps,
)(Works);

export default ContainerWorks;
