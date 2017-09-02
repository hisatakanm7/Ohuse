import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ContainerTappedFollow from './TappedFollow.js';
import { displayModal } from '../action.js'

export class TappedFollows extends React.Component {
    render() {
      const { user, displayModal } = this.props;
      const tappedFollows = user.toJSON().TappedFollowed.map((value, key) => {
        return (
          <ContainerTappedFollow id={ value.id } image_url={value.image_url} key={key} />
        )
      });
      return (
        <div className="follow_img_group">
          { tappedFollows }
          <ShowMoreButton displayModal={() => displayModal()}/>
        </div>
      )
    }
}

const ShowMoreButton  = (props) => (
  <div className="follow_img_box" onClick={() => props.displayModal()}>
    <img src="../images/show_more.png"/>
  </div>
)

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user: user
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayModal: () =>  dispatch(displayModal('ContainerBasicTemplate', {title: 'あなたのフォロー一覧', content: 'followed'})),
  };
};

const ContainerTappedFollows = connect(
    mapStateToProps,
    mapDispatchToProps
)(TappedFollows);

export default ContainerTappedFollows;
