import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { tappingFollow } from '../action.js'

export class TappedFollow extends React.Component {
    render() {
        return (
          <div className="follow_img_box">
            <img src={this.props.image_url} onClick={() => this.props.tappingFollow(this.props.id)} />
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
        tappingFollow: (id) =>  dispatch(tappingFollow(id))
    };
  };
    
const ContainerTappedFollow = connect(
    mapStateToProps,
    mapDispatchToProps
)(TappedFollow);

export default ContainerTappedFollow;
