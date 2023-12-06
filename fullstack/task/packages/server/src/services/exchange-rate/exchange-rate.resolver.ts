import { Query, Resolver } from '@nestjs/graphql';
import { Languages } from '../../shared/types/index';
import { CzechNationalBank } from '../../shared/models/CzechNationalBank.model';
import { ExchangeRate } from '../../graphql/models/ExchangeRate.graphql.model';
import { ExchangeRateService } from './exchange-rate.service';

@Resolver()
export class ExchangeRateResolver {
    constructor(private readonly exchangeRateService: ExchangeRateService) {}

    @Query(() => [ExchangeRate])
    async czechBankExchangeRates(): Promise<ExchangeRate[]> {
        // TODO: Add an option for users to pass these options if they want to see rates for different days
        const exchangeDate = new Date();
        const lang: Languages = Languages.EN;

        const bank = new CzechNationalBank();

        return this.exchangeRateService.getExchangeRates<CzechNationalBank>(
            lang,
            exchangeDate,
            bank
        );
    }
}
