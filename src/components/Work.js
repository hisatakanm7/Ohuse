import React from "react";
import { connect } from 'react-redux';
import { Modal, Grid, Row, Col } from 'react-bootstrap';
import { modalToggleChange } from '../action.js';

export class Work extends React.Component {
    render() {
      function onChange(date, dateString) {
        console.log(date, dateString);
      }
      const { work, num, modalToggleChange } = this.props;
        return (
          <div className="follow_work">
              <span className="follow_work_date">22</span>
            <div className="follow_work_title" onClick={() => modalToggleChange(work.id)}>
              <img src="../images/photo1.png"/>
              <div className="follow_work_title_text">
                {work.title}
              </div>
            </div>
            <Modal show={work.modalVisible} className="your_follow_modal" >
              <Modal.Body>
              <div className="work_modal_header">
                <div className="work_modal_header_icon">
                  <img src="../images/photo1.png"/>
                  <span>やすゆき@5/26GLF</span>
                </div>
                <div className="work_modal_header_text">
                  <div　className="work_modal_header_text_top">
                    <span className="work_modal_header_date">
                      5/26
                    </span>
                    <span className="work_modal_header_location">
                      第二回全国お布施イベント
                    </span>
                  </div>
                  <div　className="work_modal_header_text_bottom">
                    <span className="work_modal_header_title">
                      私のOFUSE
                    </span>
                  </div>
                </div>
                <span className="closeButtonFollow" onClick={() => modalToggleChange(work.id)}>×</span>
              </div>
              <div className="work_modal_body">
                <div>
                  <span>
                    5/26の第二回全国お布施イベントにて、私のOFUSEの４巻を発売させていただきます！！１つ前の３巻から大分時間が経ってしまいましたが、今回は１巻まるまるあかね×絵里の内容となっております！
                  </span>
                </div>
                <div className="work_modal_img">
                  <img src="../images/kemohure.jpg"/>
                </div>
              </div>
              </Modal.Body>
            </Modal>
          </div>
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

const ContainerWork = connect(
    mapStateToProps,
    mapDispatchToProps
)(Work);

export default ContainerWork;
