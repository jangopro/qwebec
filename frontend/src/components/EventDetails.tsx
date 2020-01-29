import React, { FunctionComponent, useEffect, useState, ProviderProps } from 'react';
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
    return <h2>{event.name}</h2>;
};

export default EventDetails;
