import React from "react";
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import ContainerBasicTemplate from './ModalComponents/BasicTemplate';

export class ModalComponent extends React.Component {
    render() {
        const { name, active, options, user } = this.props;
        switch (name) {
            case 'ContainerBasicTemplate':
              return (<ContainerBasicTemplate active = { active } options = { options }/>)
            default:
              return (<div></div>)
        }
    }
}  

const mapStateToProps = (state) => {
    const { user } = state;
    return {
      user: user,
    };
};

const ContainerModalComponent = connect(
  mapStateToProps,
)(ModalComponent);

export default ContainerModalComponent;
