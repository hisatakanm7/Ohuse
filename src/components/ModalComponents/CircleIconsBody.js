import React from "react";
import { connect } from 'react-redux';
import { CircleIcon } from './CircleIcon.js';

export class CircleIconsBody extends React.Component {
    render() {
        const { content, user } = this.props;
        const datum = eval(`user.toJSON().${content}`);
        const circleIcons = datum.map((value, key) => {
            return (
              <CircleIcon image_url={value.image_url} key={key} />
            )
          });    
        return (
            <div className="flex_follow_images_box">
              { circleIcons }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user: user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () =>  dispatch(hideModal()),
    };
  };  

const ContainerCircleIconsBody = connect(
    mapStateToProps,
)(CircleIconsBody);

export default ContainerCircleIconsBody;
