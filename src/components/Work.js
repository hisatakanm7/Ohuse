import React from "react";
import { connect } from 'react-redux';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import { modalToggleChange } from '../action.js';

export class Work extends React.Component {
    render() {
      function onChange(date, dateString) {
        console.log(date, dateString);
      }
      const { work, num, modalToggleChange } = this.props;
        return (
          <div className="follow_work">
            <div className="follow_work_date">
              22
            </div>
            <div className="follow_work_title" onClick={() => modalToggleChange(work.id)}>
              <img src="../images/photo1.png"/>
              <span className="follow_work_title_text">
                {work.title}
              </span>
            </div>
            <Modal show={work.modalVisible} onHide={() => modalToggleChange(work.id)} className="your_follow_modal" >
              <Modal.Header closeButton>
              <Grid>
                <Row type="flex">
                  <Col span={8} className="modal_follow_group"><img src="../images/photo1.png"/><span>test</span></Col>
                  <Col span={12} className="modal_follow_group"><span>test</span></Col>
                </Row>
                </Grid>
              </Modal.Header>
              <Modal.Body>
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
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalToggleChange: (id) =>  dispatch(modalToggleChange(id))
    };
};

const ContainerWork = connect(
    mapStateToProps,
    mapDispatchToProps
)(Work);

export default ContainerWork;
