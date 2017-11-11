import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export interface Props {
  statuses: any,
}

export class Footer extends React.Component <Props> {
    render() {
      const dom = !this.props.statuses.toJSON().logged_in ? < LoggedInFooter /> : < NotLoggedInFooter />;
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
    <Link to="/user">user</Link>
    <Link to="/">bars</Link>
    <Link to="/search">search</Link>
    </div>
)

const NotLoggedInFooter = () => (
  <div>
  </div>
)

const mapStateToProps = (state: { statuses: any }) => {
    const { statuses } = state;
    return {
        statuses: statuses
    };
};

const ContainerFooter = connect(
    mapStateToProps,
)(Footer);

export default ContainerFooter;
