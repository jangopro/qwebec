import React, { Component } from 'react';
import Event from './Event';
import axios from 'axios';

export default class EventListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        axios.get('/api/hello').then(data => {
            this.setState({ events: data.data.events });
        });
    }

    render() {
        // TODO put back to typescript
        const EventList = this.state.events.map(event => {
            return <Event key={event._id} event={event} />;
        });
        return (
            <div>
                <h2>Événements à venir</h2>
                <div className="event-listing">{EventList}</div>
            </div>
        );
    }
}
