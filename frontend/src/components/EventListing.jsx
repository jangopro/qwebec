import React, { useState, useEffect } from 'react';
import Event from './Event';
import axios from 'axios';

export default function EventListing() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events').then(data => {
            setEvents(data.data.events);
        });
    }, []);

    const EventList = events.map(event => {
        return <Event key={event._id} event={event} />;
    });

    return (
        <div>
            <h2>Événements à venir</h2>
            <div className="event-listing">{EventList}</div>
        </div>
    );
}
