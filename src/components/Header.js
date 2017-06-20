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

export class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        completeModalFlag: false,
        modalFlag: false,
        date: null,
        time: null,
      }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    }
    componentWillMount() {
      injectTapEventPlugin();
    }

    handleTime(event, time){
    this.setState({time: time})
  }

  handleDate(event, date){
    this.setState({date: date})
  }

  handleSubmit(event){
    let momentTime = moment(this.state.time);
    let momentDate = moment(this.state.date);
    let renderedDateTime = moment({
      year: momentDate.year(),
      month: momentDate.month(),
      day: momentDate.date(),
      hour: momentTime.hours(),
      minute: momentTime.minutes()
  });
    const newChore = {
      date_time: renderedDateTime,
    }
    this.props.actions.addEvent(newChore)
    this.setState({date: null, time: null});
  }

    render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        type='submit'
        onTouchTap={this.handleSubmit}
      />,
    ];
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
        return (
          <div className="header">
            <div className="icon_text">
              ○fuse
            </div>
            <div className="header_right">
            <div className="create_work" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>
              ＋
            </div>
            {/*
              <div className="header_right_content">
                <img src="./images/twitter-logo.png"/>
                <div className="header_right_text">
                  ログイン/新規登録
                </div>
              </div>
              */}
            </div>
            <Modal show={this.state.modalFlag} className="your_follow_modal" >
              <Modal.Body>
                <span className="closeButtonFollow" onClick={() => this.setState({modalFlag: !this.state.modalFlag})}>×</span>
                <div className="modal_follow_title">
                  予定を作る
                </div>
                <DatePicker
                  onChange={this.handleDate}
                  value={this.state.date}
                  floatingLabelText="日にち"
                  hintText="日にち"
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                />
                <TimePicker
                  onChange={this.handleTime}
                  value={this.state.time}
                  floatingLabelText="時間"
                  hintText="時間"
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                />
                <TextField
                  hintText="作品名"
                  floatingLabelText="作品名"
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineStyle={styles.underlineStyle}
                /><br />
                <TextField
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
                onTouchTap={() => this.setState({modalFlag: !this.state.modalFlag, completeModalFlag: !this.state.completeModalFlag})}
                />
                </div>
              </Modal.Body>
            </Modal>
            <Modal show={this.state.completeModalFlag} className="your_follow_modal" >
              <Modal.Body>
                <span className="closeButtonFollow" onClick={() => this.setState({completeModalFlag: !this.state.completeModalFlag})}>×</span>
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
    const { works } = state;
    return {
        works: works
    };
};

const ContainerHeader = connect(
    mapStateToProps,
)(Header);

export default ContainerHeader;
