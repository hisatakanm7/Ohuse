import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Link, hashHistory } from "react-router";
import { Modal } from 'react-bootstrap';
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HeaderStyles from '../scss/Header.scss'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";
import { createWorkHandle, createWorkAction } from '../action';
import MomentFormat from './Moment.js';


export class Header extends React.Component {
    constructor(props) {
      super(props);
      const date = new Date(this.props.create_work.toJSON().date);
      this.state = {
        completeModalFlag: false,
        modalFlag: false,
        date: date,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
      injectTapEventPlugin();
    }
    handleSubmit(othuerState) {
      this.setState({completeModalFlag: !this.state.completeModalFlag})
    }
    createWork(){
      this.setState({modalFlag: !this.state.modalFlag, completeModalFlag: !this.state.completeModalFlag})
      console.log(this.props.user.toJSON().info.id);
      console.log(this.props.create_work.toJSON());
      this.props.createWorkAction(this.props.user.toJSON().info.id, this.props.create_work.toJSON())
    }
    render() {
      const { create_work, createWorkHandle } = this.props;
      const create_work_obj = create_work.toJSON();
      const styles = {
        inputStyle: {
          color: 'white',
          WebkitTextFillColor : 'white',
          fontSize: '5vw',
        },
        textareaStyle: {
          color: 'white',
          WebkitTextFillColor : 'white',
          fontSize: '5vw',
        },
        hintStyle: {
          color: 'gray',
          WebkitTextFillColor : 'gray',
          fontSize: '5vw',
        },
        errorStyle: {
          color: 'white',
          fontSize: '3vw',
        },
        underlineStyle: {
          borderColor: 'white',
        },
        floatingLabelStyle: {
          color: 'gray',
          fontSize: '5vw',
        },
        floatingLabelFocusStyle: {
          color: 'rgb(0,188,212)',
          fontSize: '5vw',
        },
      };
      const header = (!this.state.loggedIn) ?
          <div className="create_work" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>
            ＋
          </div> :
          <div className="header_right_content">
            <img src="./images/twitter-logo.png"/>
            <div className="header_right_text">
              <a href="http://localhost:3000/auth/twitter">ログイン/新規登録</a>
            </div>
          </div> ;

        return (
          <div className="header">
            <div className="icon_text">
              ○fuse
            </div>
            <div className="header_right">
            {header}
            </div>
            <Modal show={this.state.modalFlag} className="your_follow_modal" >
              <Modal.Body>
                <span className="closeButtonFollow" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>×</span>
                <div className="modal_follow_title">
                  予定を作る
                </div>
                <DatePicker
                  onChange={(event, date) => createWorkHandle('date', date)}
                  defaultDate={create_work_obj.date}
                  formatDate={(dt) => `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`}
                  DateTimeFormat={MomentFormat}
                  locale='ja'
                  defaultDate={this.state.date}
                  floatingLabelText="日にち"
                  hintText="日にち"
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                />
                <TextField
                  onChange={(event, title) => createWorkHandle('title', title)}
                  value={create_work_obj.title}
                  hintText="作品名"
                  floatingLabelText="作品名"
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                /><br />
                <TextField
                  onChange={(event, description) => createWorkHandle('description', description)}
                  value={create_work_obj.description}
                  hintText="説明"
                  multiLine={true}
                  rows={1}
                  rowsMax={6}
                  floatingLabelText="説明"
                  textareaStyle={styles.textareaStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                /><br />
                <TextField
                  onChange={(event, eventName) => createWorkHandle('eventName', eventName)}
                  value={create_work_obj.eventName}
                  hintText="場所 or イベント"
                  floatingLabelText="場所 or イベント"
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                /><br />
                <div className="complete_button">
                <RaisedButton label="完了" primary={true} style={{
                  fontSize: '7vw',
                  margin: '5px auto',
                }}
                onTouchTap={() => this.createWork()}
                />
                </div>
              </Modal.Body>
            </Modal>
            <Modal show={this.state.completeModalFlag} className="your_follow_modal" >
              <Modal.Body>
              {/*}<span className="closeButtonFollow" onClick={() => this.setState({completeModalFlag: !this.state.completeModalFlag})}>×</span>*/}
              <span className="closeButtonFollow" onClick={() => this.handleSubmit(create_work_obj)}>×</span>
                <div className="complete_modal">
                  <span>予定の作成が<br/>完了しました！</span>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { create_work, user } = state;
    return {
      create_work: create_work,
      user: user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      createWorkHandle: (key, value) =>  dispatch(createWorkHandle(key, value)),
      createWorkAction: (userId, params) => dispatch(createWorkAction(userId, params))
    };
};


const ContainerHeader = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export default ContainerHeader;
