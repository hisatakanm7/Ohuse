import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import ContainerWork from './Work.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';
import { Modal, Grid, Row, Col } from 'react-bootstrap';

export class Works extends React.Component {
    constructor() {
      super();
      this.state = {
        modalFlag: false,
        selected: false,
      };
    }


    render() {
      const { works } = this.props;
      let work_width = 11;
      let selected_follow_width = 1;
      if (this.state.selected) {
        work_width = 11;
        selected_follow_width = 1;
      } else {
        work_width = 11;
        selected_follow_width = 1;
      }
      const myWorks = works.toJSON().map((work, key) => {
            return (
                <ContainerWork work={work} num={key} key={key} />
            )
        });
        return (
            <div>
                <Grid>
                <Row>
                  <Col xs={work_width} className="follow_works_box">
                    { myWorks }
                  </Col>
                  <Col xs={selected_follow_width} className="selected_follow">
                    <img src="../images/photo2.png"/>
                    <img src="../images/photo2.png"/>
                    <img src="../images/photo6.png"/>
                  </Col>
                </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { works } = state;
    return {
        works: works
    };
};

const ContainerWorks = connect(
    mapStateToProps,
)(Works);

export default ContainerWorks;
