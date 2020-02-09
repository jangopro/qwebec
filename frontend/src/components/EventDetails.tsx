import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { EventType } from '../types/types';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const EventDetails: FunctionComponent<MatchProps> = (props: MatchProps) => {
    const { id } = props.match.params;
    const [event, setEvent] = useState<EventType | null>();

    useEffect(() => {
        axios.get(`/api/events/${id}`).then(data => {
            // TODO rewrite this, ugly
            setEvent(data.data.event);
        });
    }, []);
    if (!event) {
        return <div>Loading...</div>;
    }
    return (
        <React.Fragment>
            <a className="back-link" href="/">
                Retour
            </a>
            <h2>{event.name}</h2>
            <div className="event-description">{event.description}</div>
            <div className="event-price">{event.price ? `${event.price}$` : 'Gratuit'}</div>
            <div className="event-author">{event.author}</div>
            <div className="event-address">{event.address}</div>
            <div className="event-city">{event.city}</div>
            <div className="event-date">{event.date}</div>
            <a href={event.url} className="event-url">
                Voir l'evenement
            </a>
        </React.Fragment>
    );
};

export default EventDetails;
