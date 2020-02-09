import React, { useState, useEffect } from 'react';
import EventListingItem from './EventListingItem';
import axios from 'axios';
import { EventType } from '../types/types';

export default function EventListing() {
    const [events, setEvents] = useState<EventType[]>();

    useEffect(() => {
        axios.get('/api/events').then(data => {
            setEvents(data.data.events);
        });
    }, []);

    if (!events) {
        return <div>Loading...</div>;
    }

    const EventList = events.map(event => {
        return <EventListingItem key={event._id} event={event} />;
    });

    return (
        <div>
            <h2>Événements à venir</h2>
            <div className="event-listing">{EventList}</div>
        </div>
    );
}
