import * as React from 'react';
import { connect } from 'react-redux';
import ContainerTimeLineBody from './TimeLineBody'
import ContainerTappedFollows from './TappedFollows';
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

const mapStateToProps = (state: any) => {
    return {
    };
};

const ContainerTimeLine = connect(
    mapStateToProps,
)(TimeLine);

export default ContainerTimeLine;
