import React from "react";
import { Modal, Button, Icon, DatePicker, Col } from 'antd';
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
          <ButtonGroup className="work">
            <Button className="btn-date">{ work.date }</Button>
            <Button className="btn-title" onClick={() => modalToggleChange(work.id)}><img src="../images/photo1.png"/>{ work.title }</Button>
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
          </ButtonGroup>
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
