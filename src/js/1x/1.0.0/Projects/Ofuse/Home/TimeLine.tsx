import * as React from 'react';
import { connect } from 'react-redux';
import ContainerTimeLineBody from './TimeLineBody'
import ContainerTappedFollows from './TappedFollows';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import { getTimeLineContents } from '../../../Redux/Action/action';

export interface Props {
    getTimeLineContents: any,
}
export class TimeLine extends React.Component <Props, any>  {
    constructor() {
        super();
        this.state = {
            wasFinishedGetTimeLineContents: false
        }
    }
    componentWillMount() {
        this.props.getTimeLineContents(() => this.setState({wasFinishedGetTimeLineContents: true}));
    }
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTimeLineContents: (successAction: any) =>  dispatch(getTimeLineContents(successAction)),
    };
};

const ContainerTimeLine = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimeLine);

export default ContainerTimeLine;
