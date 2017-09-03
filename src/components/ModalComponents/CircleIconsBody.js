import React from "react";
import { connect } from 'react-redux';
import { CircleIcon } from './CircleIcon.js';

export class CircleIconsBody extends React.Component {
    render() {
        const { user, modal } = this.props;
        const datum = eval(`user.toJSON().${modal.toJSON().options.content}`);
        const circleIcons = datum.map((value, key) => {
            return (
              <CircleIcon image_url={value.image_url} key={key} />
            )
          });    
        return (
            <div>
                <div className="modal_follow_title">
                    <span>{ modal.toJSON().options.title }</span>
                </div>
                <div className="flex_follow_images_box">
                    { circleIcons }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user, modal } = state;
    return {
        user: user,
        modal: modal
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
