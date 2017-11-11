import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayModal, tappingFollow } from '../../../Redux/Action/action';

export interface Props {
  user: any;
  displayModal: any;
  tappingFollow: any
}

export class TappedFollows extends React.Component <Props> {
    render() {
      const { user, displayModal, tappingFollow } = this.props;
      const tappedFollows = user.toJSON().TappedFollowed.map((value: any, key: any) => {
        return (
          <img
            className="circle"
            key={key}
            src={value.image_url}
            onClick={() => tappingFollow(value.id)}
          />
        )
      });
      return (
        <div className="follow_img_group">
          { tappedFollows }
          <img className="circle" src="https://s3-ap-northeast-1.amazonaws.com/ohuse.co/uploads/tmp/show_more.png" onClick={() => displayModal()}/>
        </div>
      )
    }
}

const mapStateToProps = (state: {user: any}) => {
    const { user } = state;
    return {
        user: user
    };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    displayModal: () =>  dispatch(displayModal('ContainerCircleIconsBody', {title: 'あなたのフォロー一覧', content: 'followed'})),
    tappingFollow: (id: any) =>  dispatch(tappingFollow(id)),
  };
};

const ContainerTappedFollows = connect(
    mapStateToProps,
    mapDispatchToProps
)(TappedFollows);

export default ContainerTappedFollows;
