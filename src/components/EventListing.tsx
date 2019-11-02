import React, { Component } from "react";
import Event from "./Event";
import { EventType } from "../types/types";

export default class EventListing extends Component {
  render() {
    const events: EventType[] = [
      {
        id: 1,
        name: "HacktoberFest 2019",
        description:
          "Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo",
        city: "Québec",
        date: new Date(),
        price: 10
      },
      {
        id: 2,
        name: "HacktoberFest 2019 de l'annee",
        description:
          "Mumbo Jumbo Mumbo Jumbo Mumbo Jumbo Mumbo JumboMumbo Jumbo",
        city: "Montréal",
        date: new Date(),
        price: 0
      }
    ];
    const EventList = events.map(event => {
      return <Event key={event.id} event={event} />;
    });
    return (
      <div>
        <h2>Événements à venir</h2>
        <div className="event-listing">{EventList}</div>
      </div>
    );
  }
}
