import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EventDetails from '../components/EventDetails';
import axios from 'axios';

import { getMockRouterProps } from '../tests-helpers/test';

let container: Element = null!;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeEvent = {
    name: 'HackotberFest 2020',
    description: 'Une formationd e react et shoobidoo wap!',
    author: 'Marc Bellandron',
    price: 10,
    address: '330 rue du peuple',
    city: 'Montreal',
    date: 1578198067,
    url: 'http://test.com'
};

const fakeEvent2 = {
    name: 'HackotberFest 2020',
    description: 'Une formationd e react et shoobidoo wap!',
    author: 'Marc Bellandron',
    price: 0,
    address: '330 rue du peuple',
    city: 'Montreal',
    date: 1578198067,
    url: 'http://test.com'
};

beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null!;
});

var routerProps = getMockRouterProps({ id: '3' });

it('should render a basic event', async () => {
    const data = {
        event: fakeEvent
    };
    mockedAxios.get.mockResolvedValue({ data: data });
    await act(async () => {
        render(
            <EventDetails
                history={routerProps.history}
                location={routerProps.location}
                match={routerProps.match}
            />,
            container
        );
    });
    expect(container.querySelector('h2')!.textContent).toBe(fakeEvent.name);
    expect(container.querySelector('.event-description')!.textContent).toBe(fakeEvent.description);
    expect(container.querySelector('.event-price')!.textContent).toBe(
        `${fakeEvent.price.toString()}$`
    );
    expect(container.querySelector('.event-author')!.textContent).toBe(fakeEvent.author);
    expect(container.querySelector('.event-address')!.textContent).toBe(fakeEvent.address);
    expect(container.querySelector('.event-city')!.textContent).toBe(fakeEvent.city);
    expect(container.querySelector('.event-date')!.textContent).toBe(fakeEvent.date.toString());
    expect(container.querySelector('.event-url')!.getAttribute('href')).toBe(fakeEvent.url);
    expect(container.querySelector('.event-url')!.textContent).toBe("Voir l'evenement");

    expect(container.querySelector('.back-link')!.getAttribute('href')).toBe('/');
});
it('should render free', async () => {
    const data = {
        event: fakeEvent2
    };
    mockedAxios.get.mockResolvedValue({ data: data });
    await act(async () => {
        render(
            <EventDetails
                history={routerProps.history}
                location={routerProps.location}
                match={routerProps.match}
            />,
            container
        );
    });
    expect(container.querySelector('.event-price')!.textContent).toBe('Gratuit');
});
