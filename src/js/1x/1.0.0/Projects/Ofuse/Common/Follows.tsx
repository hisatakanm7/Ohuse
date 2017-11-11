import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import axios from "axios";
import { Modal, Grid, Row, Col } from 'react-bootstrap';

export interface Props {
  method: any,
}
export class Follows extends React.Component <Props, any> {
  constructor() {
    super();
    this.state = {
      modalFlag: false
    };
  }
  changeFollow(method: string) {
      switch (method) {
        case "my_page":
          this.setState({modalFlag: !this.state.modalFlag});
          break;
        default:
      }
  }
    render() {
      const changeFollowMethod = (!this.props.method) ? 'no' : this.props.method;
        return (
          <div className="flex_follow_images_box">
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <div className="flex_follow_image" onClick={() => this.changeFollow(changeFollowMethod)}>
              <img src="../../../../../images/photo2.png"/><span>一覧fsfsdgasfdasfdsfas</span>
            </div>
            <Modal show={this.state.modalFlag} className="your_follow_modal" onHide={() => {}} >
              <Modal.Body>
              <div className="mypage_follow_modal_header">
                <div className="mypage_follow_modal_header_icon">
                  <img src="../../../../../images/photo1.png"/>
                </div>
                <div className="mypage_follow_modal_header_text">
                  <div　className="mypage_follow_modal_header_text_top">
                    ゆうき
                  </div>
                  <div　className="mypage_follow_modal_header_text_bottom">
                    プロフィールの説明プロフィールの説明プロフィールの説明プロフィールの説明プロフィールの説明プロフィールの説明プロフィール
                  </div>
                </div>
                <span className="closeButtonFollow" onClick={() => this.changeFollow("my_page")}>×</span>
              </div>
              <div className="mypage_follow_modal_body">
              <div className="mypage_follow_modal_work">
                <div className="mypage_follow_modal_work_header">
                  <div className="mypage_follow_modal_work_date">
                    6/2
                  </div>
                  <div className="mypage_follow_modal_work_title">
                    ビミョウナキョリカン４巻
                  </div>
                </div>
                <div className="mypage_follow_modal_work_body">
                  <div>
                    　作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明
                  </div>
                  <div className="mypage_follow_modal_work_image">
                    <img src="../../../../../images/images.jpg"/>
                  </div>
                </div>
              </div>
              <div className="mypage_follow_modal_work">
                <div className="mypage_follow_modal_work_header">
                  <div className="mypage_follow_modal_work_date">
                    6/2
                  </div>
                  <div className="mypage_follow_modal_work_title">
                    ビミョウナキョリカン４巻
                  </div>
                </div>
                <div className="mypage_follow_modal_work_body">
                  <div>
                    　作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明
                  </div>
                  <div className="mypage_follow_modal_work_image">
                    <img src="../../../../../images/images.jpg"/>
                  </div>
                </div>
              </div>
              </div>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}

const mapStateToProps = () => {
    return {
    };
};

const ContainerFollows = connect<any, any>(
    mapStateToProps,
)(Follows);

export default ContainerFollows;
