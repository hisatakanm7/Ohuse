import React from "react";
import { connect } from 'react-redux';
import ContainerTimeLineBody from './TimeLineBody.js'
import ContainerTappedFollows from './TappedFollows.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';
import { Modal, Grid, Row, Col } from 'react-bootstrap';

export class TimeLine extends React.Component {
    render() {
        return (
            <div>
              <ContainerTappedFollows />
              <ContainerTimeLineBody />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const ContainerTimeLine = connect(
    mapStateToProps,
)(TimeLine);

export default ContainerTimeLine;
