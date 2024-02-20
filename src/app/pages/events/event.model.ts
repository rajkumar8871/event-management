interface Location {
    country: string;
    state: string;
    city: string;
    street: string;
    zipcode: string;
}

export interface Event {
    id: number;
    type: string;
    image: string;
    location: Location;
    date: string;
    gender: string;
}
