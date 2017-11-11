import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Modal } from 'react-bootstrap';
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";
// import MomentFormat from './Moment';

export interface Props {
  user: any,
  create_work: any,
}

export class Header extends React.Component <Props, any> {
    constructor() {
      super();
      this.state = {
        completeModalFlag: false,
        modalFlag: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(othuerState: any) {
      this.setState({completeModalFlag: !this.state.completeModalFlag})
    }
    changeModalFlag() {
      this.setState({modalFlag: !this.state.modalFlag});
    }
    render() {
      const { create_work } = this.props;
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
      const header = !this.state.loggedIn ? < LoggedInHeader displayModal={() => this.changeModalFlag()} /> : < NotLoggedInHeader />;

        return (
          <div className="header">
            <Icon />
            <div className="header_right">
              {header}
            </div>
          </div>
        )
    }
}

const Icon = () => (
  <div className="icon_text">
    ○fuse
  </div>
)

const LoggedInHeader = (props: any) => (
  <div className="create_work" onClick={() => props.displayModal()}>
    ＋
  </div>
)

const NotLoggedInHeader = () => (
  <div className="header_right_content">
    <img src="https://s3-ap-northeast-1.amazonaws.com/ohuse.co/uploads/tmp/1498949515-15786-0001-6408/iQkvOwTa_normal.jpg"/>
    <div className="header_right_text">
      <a href="http://localhost:3000/auth/twitter">ログイン/新規登録</a>
    </div>
  </div>
)

const mapStateToProps = (state: {create_work: any, user: any}) => {
    const { create_work, user } = state;
    return {
      create_work: create_work,
      user: user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
};

const ContainerHeader = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export default ContainerHeader;
