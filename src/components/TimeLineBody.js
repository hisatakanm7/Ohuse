import React from "react";
import { connect } from 'react-redux';
import Events from './Events.js';
import workStyles from '../scss/Work.scss';
import worksStyles from '../scss/Works.scss';
import { Grid, Row, Col } from 'react-bootstrap';

export class TimeLineBody extends React.Component {
    render() {
        const { user, events } = this.props;
        const tappingFollowed = user.get('followed').filter(x => x.get('tapping') === false)

        const eventsPartialWidth = (tappingFollowed.isEmpty()) ? 12 : 11;
        const tappingFollowedWidth = (tappingFollowed.isEmpty()) ? 0 : 1;
        const displayEvents = (tappingFollowed.isEmpty()) ? events : events.filter(event => 
            (tappingFollowed.find(followed => 
                followed.get('id') === event.get('user_id')
            ) === undefined) ? false : true
        );

        const eventsPartial = <Events events = { displayEvents } />
        const tappingFollowedPartial = tappingFollowed.toJSON().map((value, key) => {
            return (
                <img src={value.image_url}/>
            )
        });
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={eventsPartialWidth}>
                            {eventsPartial}
                        </Col>
                        <Col xs={tappingFollowedWidth} className="selected_follow">
                            { tappingFollowed }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user, events } = state;
    return {
        user: user,
        events: events
    };
};

const ContainerTimeLineBody = connect(
    mapStateToProps,
)(TimeLineBody);

export default ContainerTimeLineBody;
