import React from 'react';
import { Link } from 'react-router-dom';
import { EventType } from '../types/types';

interface Props {
    event: EventType;
}

export default function EventListingItem(props: Props) {
    const { event } = props;
    return (
        <div className="event-block">
            <div className="event-date-block">
                <span className="event-weekday">
                    {new Date(event.startDate).toLocaleDateString('fr-ca', { weekday: 'long' })}
                </span>
                <strong className="event-date">{new Date(event.startDate).getDate()}</strong>
                <span className="event-date-month">
                    {new Date(event.startDate).toLocaleDateString('fr-ca', { month: 'long' })}
                </span>
            </div>
            <div className="event-infos">
                <Link className="event-name" to={`/event/${event.slug}`}>
                    <span>{event.name}</span>
                </Link>
                <strong className="event-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="event-city">{event.city}</span>
                </strong>
                <div className="event-time-price-block">
                    <div>
                        <i className="fas fa-clock"></i>{' '}
                        <span className="event-time">
                            {new Date(event.startDate).toLocaleTimeString('fr-ca', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                    </div>
                    <div>
                        <i className="fas fa-usd-circle"></i>{' '}
                        <span className="event-price">
                            {event.price ? `${event.price}$` : 'Gratuit'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
