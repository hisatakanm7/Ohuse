import React from "react";
import { Modal, Button, Icon } from 'antd';
import { connect } from 'react-redux';
const ButtonGroup = Button.Group;
// import { bindActionCreators } from 'redux';
// import { Provider } from 'react-redux';
import { modalToggleChange } from '../action.js';

export class Work extends React.Component {
    render() {
      const { work, num, modalToggleChange } = this.props;
        return (
          <ButtonGroup>
            <Button>{ work.date }</Button>
            <Button type="primary" onClick={() => modalToggleChange(work.id)}>{ work.title }</Button>
            <Modal
              title="20px to Top"
              style={{ top: 20 }}
              visible={work.modalVisible}
              onOk={() => modalToggleChange(work.id)}
              onCancel={() => modalToggleChange(work.id)}
            >
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
