export interface EventType {
    _id: number;
    name: string;
    slug: string;
    description: string;
    city: string;
    author: string;
    postalCode: string;
    venue: string;
    address: string;
    startDate: Date;
    endDate: Date;
    price: number;
    url: string;
}
