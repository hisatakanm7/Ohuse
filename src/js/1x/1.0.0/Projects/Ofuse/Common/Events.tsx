import * as React from 'react';
import { connect } from 'react-redux';
import ContainerEvent from './Event';
// import { PullToRefresh } from '/Users/onikiyuuki/Downloads/pulltorefresh.js-master//dist/pulltorefresh.js';

export interface Props {
    events: any
}

export default class Events extends React.Component<Props, any> {
    constructor() {
        super()
        this.state = {
            text: 'test'
        }
        this.changeState = this.changeState.bind(this);
    }  
    changeState() {
        this.setState({text: 'refleshed'});
    }
    componentDidMount() {
        const func = this.changeState();
        // PullToRefresh.init({
        //   mainElement: '.follow_works_box',
        //   onRefresh: function(func){
        //     func();
        //     }
        // });
      }  

    render() {
        const { events } = this.props;
        const myEvents = events.toJS().map((event: any, key: any) => {
            return (
                <ContainerEvent event={event} key={key} />
            )
        });
        return (
            <div className="follow_works_box" id="scroll">
                <h1>{this.state.text}</h1>
                {myEvents}
            </div>
        )
    }
}
