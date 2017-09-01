import React from "react";
import { connect } from 'react-redux';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import ContainerCircleIconsBody from './CircleIconsBody.js'
import { hideModal } from '../../action.js'

export class BasicTemplate extends React.Component {
    render() {
        const { active, options, datum, hideModal } = this.props;
        return (
            <Modal show={active} className="your_follow_modal" >
                <Modal.Body>
                    <span className="closeButtonFollow" onClick={() => hideModal()}>×</span>
                    <div className="modal_follow_title">
                        <span>{ options.title }</span>
                    </div>
                    <ContainerCircleIconsBody content = { options.content }/>
                </Modal.Body>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () =>  dispatch(hideModal()),
    };
  };  

const ContainerBasicTemplate = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicTemplate);

export default ContainerBasicTemplate;
