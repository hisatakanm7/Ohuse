import * as React from 'react';
import { connect } from 'react-redux';
import Events from '../Common/Events';
import { Grid, Row, Col } from 'react-bootstrap';

export interface Props {
    user: any;
    events: any;
  }

export class TimeLineBody extends React.Component <Props, object> {
    render() {
        const { user, events } = this.props;
        const tappingFollowed = user.get('followed').filter((x: any) => x.get('tapping') === false)
        const tappingFollowedPartial = tappingFollowed.toJSON().map((value: any, key: any) => {
            return (
                <img src={value.image_url} key={key}/>
            )
        });

        const displayEvents = (tappingFollowed.isEmpty()) ? events : events.filter((event: any) => 
            (tappingFollowed.find((followed: any) => 
                followed.get('id') === event.get('user_id')
            ) === undefined) ? false : true
        );
        const eventsPartial = <Events events = { displayEvents } />

        const eventsPartialWidth = (tappingFollowed.isEmpty()) ? 12 : 11;
        const tappingFollowedWidth = (tappingFollowed.isEmpty()) ? 0 : 1;
        
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={eventsPartialWidth}>
                            { eventsPartial }
                        </Col>
                        <Col xs={tappingFollowedWidth} className="selected_follow">
                            { tappingFollowedPartial }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: {user: any, events:any}) => {
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
