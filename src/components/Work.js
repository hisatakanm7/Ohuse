import React from "react";
import { Button, Icon, DatePicker, Col, Row } from 'antd';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
const ButtonGroup = Button.Group;
import { modalToggleChange } from '../action.js';

export class Work extends React.Component {
    render() {
      function onChange(date, dateString) {
        console.log(date, dateString);
      }
      const { work, num, modalToggleChange } = this.props;
        return (
          <div className="follow_work">
            <span className="follow_work_date">
              ２２
            </span>
            <span className="follow_work_title" onClick={() => modalToggleChange(work.id)}>
              <img src="../images/photo1.png"/>
              <span className="follow_work_title_text">
                {work.title}
              </span>
            </span>
            <Modal show={work.modalVisible} onHide={() => modalToggleChange(work.id)} className="your_follow_modal" >
                <Modal.Header closeButton>
                <Row type="flex">
                  <Col span={8} className="modal_follow_group"><img src="../images/photo1.png"/><span>test</span></Col>
                  <Col span={12} className="modal_follow_group"><span>test</span></Col>
                </Row>
                </Modal.Header>
                <Modal.Body>
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
{/*
            <Modal
              title="20px to Top"
              style={{ top: 20 }}
              visible={work.modalVisible}
              onOk={() => modalToggleChange(work.id)}
              onCancel={() => modalToggleChange(work.id)}
            >
              <DatePicker onChange={onChange} />
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
            */}
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
