import React from "react";
import { connect } from 'react-redux';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import { hideModal } from '../action.js'
import { ModalBody } from './ModalBody.js'

export class ModalRoot extends React.Component {
    render() {
        const { modal, hideModal } = this.props;
        return (
            <Modal show={modal.toJS().active} className="your_follow_modal" >
                <Modal.Body>
                    <span className="closeButtonFollow" onClick={() => hideModal()}>×</span>
                    <ModalBody modal={ modal }/>
                </Modal.Body>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
  const { modal } = state;
  return {
    modal: modal
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () =>  dispatch(hideModal()),
    };
  };  

const ContainerModalRoot = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRoot);

export default ContainerModalRoot;
