import React from "react";
import { connect } from 'react-redux';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import { modalToggleChange } from '../action.js';

export class Follow extends React.Component {
    render() {
        return (
          <h3>hfdsaf</h3>
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

const ContainerFollow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Follow);

export default ContainerFollow;
