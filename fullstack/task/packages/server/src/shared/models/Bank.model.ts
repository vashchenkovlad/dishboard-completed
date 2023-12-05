import { AvailableBanks } from '../types';

export abstract class Bank {
    public abstract alpha2Code: AvailableBanks;
    public abstract getDataSourceUrl(...params: any[]): string;
    protected abstract parseDate(data: Date): string;
}
