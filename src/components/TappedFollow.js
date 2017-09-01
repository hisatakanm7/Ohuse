import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class TappedFollow extends React.Component {
    render() {
        return (
          <div className="follow_img_box">
            <img src={this.props.image_url}/>
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

const ContainerTappedFollow = connect(
    mapStateToProps,
)(TappedFollow);

export default ContainerTappedFollow;
