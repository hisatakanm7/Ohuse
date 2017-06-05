import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import axios from "axios";
import ContainerWork from './Work.js';
import styles from '../scss/Work.scss';
import { Row, Col, Modal, Button } from 'antd';



export class Works extends React.Component {
    constructor() {
      super();
      this.state = {
        modalFlag: false
      };
    }
    render() {
      const { works } = this.props;
      const myWorks = works.toJSON().map((work, key) => {
            return (
                <ContainerWork work={work} num={key} key={key} />
            )
        });
        return (
            <div>
                <Row gutter={5} type="flex" justify="center" className="follow_img_group">
                  <Col span={3} className="follow_img"><img src="../images/photo1.png" className="follow_img"/></Col>
                  <Col span={3} className="follow_img"><img src="../images/photo2.png" className="follow_img"/></Col>
                  <Col span={3} className="follow_img"><img src="../images/photo3.png" className="follow_img"/></Col>
                  <Col span={3} className="follow_img"><img src="../images/photo4.png" className="follow_img"/></Col>
                  <Col span={3} className="follow_img"><img src="../images/photo5.png" className="follow_img"/></Col>
                  <Col span={3} className="follow_img"><img src="../images/photo6.png" className="follow_img"/></Col>
                  <Col span={3} id="show_more_box" className="follow_img"><Button shape="circle" className="show_more" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>もっと<br />みる</Button></Col>
                </Row>
                <Row>
                  { myWorks }
                </Row>
                <Modal
                  title="20px to Top"
                  className="modal_style"
                  wrapClassName="modal_style"
                  style={{ top: 20 }}
                  visible={this.state.modalFlag}
                  onOk={() => this.setState({modalFlag: !this.state.modalFlag})}
                  onCancel={() => this.setState({modalFlag: !this.state.modalFlag})}
                >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
                </Modal>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
//     };
// };

const ContainerWorks = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Works);

export default ContainerWorks;
