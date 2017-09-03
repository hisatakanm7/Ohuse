import React from "react";
import { connect } from 'react-redux';
import ContainerEvent from './Event.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';

export default class Events extends React.Component {
    render() {
        const { events } = this.props;
        const myEvents = events.toJSON().map((event, key) => {
            return (
                <ContainerEvent event={event} key={key} />
            )
        });
        return (
            <div className="follow_works_box">
                {myEvents}
            </div>
        )
    }
}
