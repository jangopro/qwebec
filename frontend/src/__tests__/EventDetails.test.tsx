import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EventDetails from '../components/EventDetails';
import axios from 'axios';

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

it('render data', async () => {
    const fakeEvent = {
        name: 'HackotberFest 2020'
    };
    const dataL = {
        event: fakeEvent
    };
    const data2 = {
        data: dataL
    };

    mockedAxios.get.mockResolvedValue(data2);
    await act(async () => {
        render(<EventDetails />, container);
    });
    expect(container.querySelector('h2')!.textContent).toBe(fakeEvent.name);
});
