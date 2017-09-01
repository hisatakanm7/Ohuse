import React from "react";
import { connect } from 'react-redux';
import ContainerModalComponent from './ModalComponent';

export class ModalRoot extends React.Component {
    render() {        
      const { modal } = this.props;
      return (
          <ContainerModalComponent name = {modal.toJS().component} active = {modal.toJS().active} options = {modal.toJS().options}/>
        )
    }
}

const mapStateToProps = (state) => {
    const { modal } = state;
    return {
      modal: modal
    };
};

const ContainerModalRoot = connect(
  mapStateToProps,
)(ModalRoot);

export default ContainerModalRoot;
