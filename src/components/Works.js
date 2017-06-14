import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import ContainerWork from './Work.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';
import { Row, Col, Button } from 'antd';
import { Modal } from 'react-bootstrap';



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
                  <div className="follow_img_box">
                    <div id="show_more_box">
                      <Button className="show_more" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>もっと<br />みる</Button>
                    </div>
                  </div>
                </div>
                {/*一旦ここに作ったが、workを内包してるのと同じdivの中に作る*/}
                <Row type="flex" justify="center">
                  <Col span={23} className="work_month">
                    5月
                  </Col>
                </Row>

                <Row gutter={5} type="flex" justify="center">
                  <Col span={21}>
                    { myWorks }
                  </Col>
                  <Col span={2} className="selected_follow">
                    <img src="../images/photo1.png"/>
                    <img src="../images/photo2.png"/>
                    <img src="../images/photo6.png"/>
                  </Col>
                </Row>
                <Modal show={this.state.modalFlag} className="your_follow_modal" >
                    <Modal.Body>
                    <span className="closeButtonFollow" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>×</span>
                      <Row gutter={1} type="flex">
                        <Col span={4} className="modal_follow_group"><img src="../images/photo1.png"/><span>fdafsafsdffdaf</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo2.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo3.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo4.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo5.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo6.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo1.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo2.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo3.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo4.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo5.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo6.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo1.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo2.png"/><span>test</span></Col>
                        <Col span={4} className="modal_follow_group"><img src="../images/photo3.png"/><span>test</span></Col>
                      </Row>
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
