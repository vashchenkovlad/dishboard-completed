import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExchangeRate {
    @Field(() => Int)
    amount?: number;

    @Field()
    currency?: string;

    @Field()
    country?: string;

    @Field()
    currencyCode?: string;

    @Field(() => Float)
    rate?: number;
}
