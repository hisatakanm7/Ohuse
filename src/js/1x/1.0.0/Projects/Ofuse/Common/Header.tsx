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

export interface Props {
  user: any,
  status: any,
}

export class Header extends React.Component <Props, any> {
    render() {
      const headerRightPartial = this.props.status.loggedIn ? < LoggedInHeader displayModal={() => {}} /> : <NotLoggedInHeader />;
        return (
          <div className="header">
            <Icon />
            <div className="header_right">
              {headerRightPartial}
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
    <img src="https://s3-ap-northeast-1.amazonaws.com/ohuse.co/uploads/tmp/ofuse_images/twitter-logo.png"/>
    <div className="header_right_text">
      <a href="http://localhost:3000/auth/twitter">ログイン/新規登録</a>
    </div>
  </div>
)

const mapStateToProps = (state: { user: any, status: any}) => {
    const { user } = state;
    return {
      user: user,
      status: status
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
