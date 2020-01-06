import React, { Component } from 'react';
import axios from 'axios';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {}
        };
    }

    componentDidMount() {
        axios.get('/api/events/hacktoberfest-2020').then(data => {
            this.setState({ event: data.data.event });
        });
    }
    // TODO not with props but get from backend

    render() {
        return <h2>{this.state.event.name}</h2>;
    }
}
