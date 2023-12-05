import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Languages } from '../../shared/types/index';
import { Bank } from '../../shared/models/Bank.model';
import { Currency } from '../../shared/types/index';

interface RatesResponseType {
    rates: Currency[];
}

@Injectable()
export class ExchangeRateService {
    constructor(private readonly httpService: HttpService) {}

    public async getExchangeRates<T extends Bank>(
        lang: Languages,
        date: Date,
        bank: T
    ): Promise<Currency[]> {
        const dataSourceUrl: string = bank.getDataSourceUrl(lang, date);

        const {
            data: { rates },
        } = await firstValueFrom(
            this.httpService.get<RatesResponseType>(dataSourceUrl).pipe(
                catchError((error: AxiosError) => {
                    throw error;
                })
            )
        );

        return rates;
    }
}
