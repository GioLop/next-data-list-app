export type Name = {
    first: string;
    middle: string;
    last: string;
};

export type Coordinates = {
  latitude: string;
  longitude: string;      
};

export type Address = {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    coordinates: Coordinates;
};

export type Job = {
    title: string;
    descriptor: string;
    area: string;
    type: string;
    company:string
};

export type CreditCard = {
    number: string;
    cvv: string;
    issuer: string;
};

export type Client = {
    phoneNumber: string;
    name: Name;
    username: string;
    email: string[];
    location: Address;
    job: Job;
    creditCard: CreditCard;
    id: string;
};

export type PaginatedData = {
    data: Client[];
    page: number;
    pageSize: number;
    total: 300;
};
