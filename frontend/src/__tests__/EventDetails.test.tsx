import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EventDetails from '../components/EventDetails';
import axios from 'axios';

import { getMockRouterProps } from '../tests-helpers/test';

let container: Element = null!;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null!;
});

var routerProps = getMockRouterProps({ id: '3' });

it('render data', async () => {
    const fakeEvent = {
        name: 'HackotberFest 2020',
        description: 'Une formationd e react et shoobidoo wap!'
    };
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
});
