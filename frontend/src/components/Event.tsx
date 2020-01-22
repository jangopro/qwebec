import React from 'react';
import { Link } from 'react-router-dom';
import { EventType } from '../types/types';

interface Props {
    event: EventType;
}

export default function Event(props: Props) {
    const { event } = props;
    return (
        <div className="event-block">
            <div className="event-date-block">
                <span className="event-weekday">
                    {new Date(event.date).toLocaleDateString('fr-ca', { weekday: 'long' })}
                </span>
                <strong className="event-date">{new Date(event.date).getDate()}</strong>
                <span>{new Date(event.date).toLocaleDateString('fr-ca', { month: 'long' })}</span>
            </div>
            <div className="event-infos">
                <Link className="event-name" to={`/event/${event.slug}`}>
                    <span>{event.name}</span>
                </Link>
                <strong className="event-location">
                    <i className="fas fa-map-marker-alt"></i> {event.city}
                </strong>
                <div className="event-time-price-block">
                    <div>
                        <i className="fas fa-clock"></i>{' '}
                        {new Date(event.date).toLocaleTimeString('fr-ca', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </div>
                    <div>
                        <i className="fas fa-usd-circle"></i>{' '}
                        {event.price ? `${event.price}$` : 'Gratuit'}
                    </div>
                </div>
            </div>
        </div>
    );
}
