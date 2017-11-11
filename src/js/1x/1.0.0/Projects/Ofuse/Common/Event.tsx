import * as React from "react";
import { connect } from "react-redux";
import { displayModal } from "../../../Redux/Action/action";

export interface Props {
    event: any,
    displayModal: any
}

export class Event extends React.Component <Props, any> {
    render() {
      const { event, displayModal } = this.props;
      const date = event.release.match( /\d{1,2}\s/)[0];
      return (
          <div className="follow_work">
            <span className="follow_work_date">{event.release.match( /\d{1,2}\s/)[0]}</span>
            <div className="follow_work_title" onClick={() => displayModal("ContainerEventDetail", {id: event.id, user_id: event.user_id})}>
                <img src={event.image_url}/>
                <div className="follow_work_title_text">
                    {event.title}
                </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        displayModal: (component: any, options: any) =>  dispatch(displayModal(component, options)),
    };
};

const ContainerEvent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default ContainerEvent;
