import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

export default function EventDetails() {
    const [event, setEvent] = useState({});
    useEffect(() => {
        axios.get('/api/events/hacktoberfest-2020').then(data => {
            setEvent(data.data.event);
        });
    }, []);
    return <h2>{event.name}</h2>;
}
