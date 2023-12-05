export type AvailableBanks = 'CZ' | 'USA';

export enum Languages {
    EN = 'EN',
    CZ = 'CZ',
}

export interface Currency {
    amount: number;
    currency: string;
    country: string;
    currencyCode: string;
    rate: number;
}
