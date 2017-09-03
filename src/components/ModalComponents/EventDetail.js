import React from "react";
import { connect } from 'react-redux';
import { Modal, Grid, Row, Col } from 'react-bootstrap';

export class EventDetail extends React.Component {
    render() {
        const { modal, events, user } = this.props;
        const event = events.find(event => 
            event.get('id') === modal.toJS().options.id
        )
        const followed = user.get('followed').find(user => 
            user.get('id') === modal.toJS().options.user_id
        )
        const date = event.release.match( /\d{1,2}\-\d{1,2}\s/)[0].replace( '-' , '/') ;;
        return (
            <div>
                <div className="work_modal_header">
                    <div className="work_modal_header_icon">
                        <img src={followed.image_url}/>
                        <span>{followed.name}</span>
                    </div>
                    <div className="work_modal_header_text">
                        <div　className="work_modal_header_text_top">
                            <span className="work_modal_header_date">
                                {date}
                            </span>
                            <span className="work_modal_header_location">
                                {event.place}
                            </span>
                        </div>
                        <div　className="work_modal_header_text_bottom">
                            <span className="work_modal_header_title">
                                {event.title}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="work_modal_body">
                    <div>
                        <span>
                            {event.description}
                        </span>
                    </div>
                    <div className="work_modal_img">
                        <img src={event.image_url}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { modal, events, user } = state;
    return {
      modal: modal,
      events: events,
      user: user
    };
  };
  
  const ContainerEventDetail = connect(
    mapStateToProps
)(EventDetail);

export default ContainerEventDetail;



