import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRateEntity } from '../../exchange-rate.entity';
import { ExchangeRate, WithPagination } from '../../../shared/types';

@Injectable()
export class ExchangeRateRepository {
    constructor(
        @InjectRepository(ExchangeRateEntity)
        private readonly ormRepository: Repository<ExchangeRateEntity>
    ) {}

    public async findAll(): Promise<WithPagination<ExchangeRateEntity>> {
        const queryBuilder = this.ormRepository.createQueryBuilder('currency');

        const [rates, count] = await queryBuilder.getManyAndCount();

        return { itemsCount: count, entities: rates };
    }

    public async bulkInsert(rates: ExchangeRate[]): Promise<void> {
        const queryBuilder = this.ormRepository.createQueryBuilder('currency');

        await queryBuilder
            .createQueryBuilder()
            .insert()
            .into(ExchangeRateEntity)
            .values(rates)
            .execute();
    }
}
