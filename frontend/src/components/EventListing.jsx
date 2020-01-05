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
        /*const events = [
            {
                id: 1,
                name: 'HacktoberFest 2019',
                description: 'Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo',
                city: 'Québec',
                date: new Date(),
                price: 10
            },
            {
                id: 2,
                name: "HacktoberFest 2019 de l'annee",
                description: 'Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo Mumbo JumboMumbo Jumbo',
                city: 'Montréal',
                date: new Date(),
                price: 0
            }
        ];*/
        console.log(this.state.events);
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
