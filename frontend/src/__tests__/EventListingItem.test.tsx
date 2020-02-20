import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import EventListingItem from '../components/EventListingItem';
import { MemoryRouter } from 'react-router-dom';

let container: Element = null!;

const fakeEvent = {
    name: 'HackotberFest 2020',
    slug: 'hacktober-2020',
    description: 'Une formationd e react et shoobidoo wap!',
    author: 'Marc Bellandron',
    price: 10,
    address: '330 rue du peuple',
    city: 'Montreal',
    startDate: 1578198067,
    endDate: 1578198067,
    url: 'http://test.com'
};
const fakeEvent2 = {
    name: 'HackotberFest 2020',
    slug: 'hacktober-2020',
    description: 'Une formationd e react et shoobidoo wap!',
    author: 'Marc Bellandron',
    price: 0,
    address: '330 rue du peuple',
    city: 'Montreal',
    startDate: 1578198067,
    endDate: 1578198067,
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

it('should render a basic event', async () => {
    await act(async () => {
        render(
            <MemoryRouter>
                <EventListingItem event={fakeEvent} />
            </MemoryRouter>,
            container
        );
    });
    expect(container.querySelector('.event-name')!.textContent).toBe(fakeEvent.name);
    expect(container.querySelector('.event-price')!.textContent).toBe(
        `${fakeEvent.price.toString()}$`
    );
    expect(container.querySelector('.event-time')!.textContent).toBe(
        new Date(fakeEvent.startDate).toLocaleTimeString('fr-ca', {
            hour: '2-digit',
            minute: '2-digit'
        })
    );
    expect(container.querySelector('.event-city')!.textContent).toBe(fakeEvent.city);
    expect(container.querySelector('.event-date')!.textContent).toBe(
        new Date(fakeEvent.startDate).getDate().toString()
    );
    expect(container.querySelector('.event-weekday')!.textContent).toBe(
        new Date(fakeEvent.startDate).toLocaleDateString('fr-ca', { weekday: 'long' })
    );
    expect(container.querySelector('.event-date-month')!.textContent).toBe(
        new Date(fakeEvent.startDate).toLocaleDateString('fr-ca', { month: 'long' })
    );
    expect(container.querySelector('.event-name')!.getAttribute('href')).toBe(
        `/event/${fakeEvent.slug}`
    );
});
it('should render a different text if price is 0', async () => {
    await act(async () => {
        render(
            <MemoryRouter>
                <EventListingItem event={fakeEvent2} />
            </MemoryRouter>,
            container
        );
    });
    expect(container.querySelector('.event-price')!.textContent).toBe('Gratuit');
});
