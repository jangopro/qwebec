import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EventType } from '../types/types';

interface Props {
    event: EventType;
}

export default class Event extends Component<Props> {
    render() {
        const { event } = this.props;
        return (
            <div className="event-block">
                <div className="event-date-block">
                    <span className="event-weekday">
                        {/* {event.date.toLocaleDateString("fr-ca", { weekday: "long" })} */}
                    </span>
                    {/* <strong className="event-date">{event.date.getDate()}</strong> */}
                    <span>{/* {event.date.toLocaleDateString("fr-ca", { month: "long" })} */}</span>
                </div>
                <div className="event-infos">
                    <span>{event.name}</span>

                    <strong className="event-location">
                        {/* <i className="fas fa-map-marker-alt"></i> {event.city} */}
                    </strong>
                    <div className="event-time-price-block">
                        <div>
                            {/* <i className="fas fa-clock"></i>{" "}
              {event.date.toLocaleTimeString("fr-ca", {
                hour: "2-digit",
                minute: "2-digit"
              })} */}
                        </div>
                        <div>
                            {/* <i className="fas fa-usd-circle"></i>{" "}
              {event.price ? `${event.price}$` : "Gratuit"}*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
