import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import { getMockRouterProps } from '../tests-helpers/test';
import EventListing from '../components/EventListing';

let container: Element = null!;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeEvent = [
    {
        _id: 1000,
        name: 'HackotberFest 2020',
        description: 'Une formationd e react et shoobidoo wap!',
        author: 'Marc Bellandron',
        price: 10,
        address: '330 rue du peuple',
        city: 'Montreal',
        date: 1578198067,
        url: 'http://test.com'
    },
    {
        _id: 1001,
        name: 'HackotberFest 2020',
        description: 'Une formationd e react et shoobidoo wap!',
        author: 'Marc Bellandron',
        price: 0,
        address: '330 rue du peuple',
        city: 'Montreal',
        date: 1578198067,
        url: 'http://test.com'
    }
];

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
        events: fakeEvent
    };
    mockedAxios.get.mockResolvedValue({ data: data });
    await act(async () => {
        render(
            <MemoryRouter>
                <EventListing key="testy" />
            </MemoryRouter>,
            container
        );
    });
    expect(container.querySelector('h2')!.textContent).toBe('Événements à venir');
});
