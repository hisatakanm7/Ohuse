import * as React from 'react';
import { connect } from 'react-redux';
const I = require('immutable');
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { RouteWithSubRoutes } from '../../../RouteWithSubRoutes';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from "axios";
import ContainerFollows from '../Common/Follows';
import { Modal, Grid, Row, Col, Tabs, Tab, DropdownButton, MenuItem } from 'react-bootstrap';
import Events from '../Common/Events';
import ContainerOfuse from './Ofuse';
import { getCreator } from '../../../Redux/Action/action';

export interface Props {
    getCreator: any;
    match: any;
    user: any
  }

export class User extends React.Component  <Props, any> {
    constructor() {
        super()
        this.state = {
            hasReceived: false,
            info: '',
            events: [],
            ofuses: '',
            billedOfuses: [],
            followed: [],
            follower: [],
            selectedInOfusePartial: 1,
        }
      }  
    componentWillMount() {
        this.props.getCreator(
            this.props.match.params.id,
            (user: any) => this.setState({
                hasReceived: true,
                info: I.fromJS(user.info),
                events: I.fromJS(user.events),
                ofuses: I.fromJS(user.ofuses),
                billedOfuses: I.fromJS(user.billedOfuses),
                followed: I.fromJS(user.followed),
                follower: I.fromJS(user.follower),
            })
        );
    }
    componentDidUpdate() {
        var scrollPosition = document.getElementsByClassName("tab-content")[0].scrollTop;
        var scrollHeight = document.getElementsByClassName("tab-content")[0].scrollHeight;
        document.getElementsByClassName("tab-content")[0].scrollTop = 10000;
      }

    render() {
        const { 
            hasReceived,
            info,
            events,
            ofuses,
            billedOfuses,
            followed,
            follower,
            selectedInOfusePartial,
         } = this.state;

        if (hasReceived === false) {
            return (
                <div>
                    nowloading
                </div>
            )
        }
        const ofusesPartial = ofuses.toJS().map((value: any, key: any) => {
            return (
                <ContainerOfuse
                    key={key}
                    image_url={value.image_url}
                    comment={value.comment}
                    date={value.created_at}
                />
            )
        });
        const billedOfusesPartial = billedOfuses.toJS().map((value: any, key: any) => {
            return (
                <ContainerOfuse
                    key={key}
                    image_url={value.image_url}
                    comment={value.comment}
                    date={value.created_at}
                />
            )
        });
          return (
            <div className="my_page">
              <div className="profile_box">
                <div className="profile_box_icon">
                  <img src={ info.get('image_url') }/>
                </div>
                <div className="profile_box_text">
                  <div className="profile_name_and_id">
                    <span className="profile_name">
                      { info.get('name') }
                    </span>
                    <span className="profile_id">
                      { info.get('TwID') }
                    </span>
                  </div>
                  <div className="profile_description">
                    <span>
                      { info.get('description') }
                    </span>
                  </div>
                </div>
              </div>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="作品" tabClassName="tab1">
                    <Events events={events} />
                </Tab>
                <Tab eventKey={2} title="Ofuse">
                    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                        <MenuItem eventKey="1" onSelect={() => this.setState({selectedInOfusePartial: 1})}>されたOfuse</MenuItem>
                        <MenuItem eventKey="2" onSelect={() => this.setState({selectedInOfusePartial: 2})}>したOfuse</MenuItem>
                    </DropdownButton>
                    {(selectedInOfusePartial === 1)
                        ? ofusesPartial
                        : billedOfusesPartial
                    }
                </Tab>
            </Tabs>

      </div>
          )
      }
  }

const mapStateToProps = (state: {user:object, events:object}) => {
    const { user, events } = state;
    return {
        user: user,
        events: events
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      getCreator: (creatorId: any, successAction: any) =>  dispatch(getCreator(creatorId, successAction)),
    };
  };
  
const ContainerUser: any = connect<{}, {}, Props>(
    mapStateToProps,
    mapDispatchToProps,
)(User);

export default ContainerUser;
