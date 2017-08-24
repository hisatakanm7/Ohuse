import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Footer extends React.Component {
    render() {
      const dom = this.props.statuses.toJSON().logged_in ? < LoggedInFooter /> : < NotLoggedInFooter />;
        return (
          <div>
            { dom }
          </div>
        )
    }
}

const LoggedInFooter = () => (
  <div id="footer">
    <Link to="/work">home</Link>
    <Link to="/">user</Link>
    <Link to="/">bars</Link>
  </div>
)

const NotLoggedInFooter = () => (
  <div>
  </div>
)

const mapStateToProps = (state) => {
    const { statuses } = state;
    return {
        statuses: statuses
    };
};

const ContainerFooter = connect(
    mapStateToProps,
)(Footer);

export default ContainerFooter;
