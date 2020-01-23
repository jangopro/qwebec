import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { EventType } from '../types/types';
const EventDetails: FunctionComponent = () => {
    const [event, setEvent] = useState<EventType | null>();

    useEffect(() => {
        axios.get('/api/events/hacktoberfest-2020').then(data => {
            // TODO rewrite this, ugly
            setEvent(data.data.event);
        });
    }, []);
    if (!event) {
        return <div>Loading...</div>;
    }
    return <h2>{event.name}</h2>;
};

export default EventDetails;
