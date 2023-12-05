import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

const {
    DB_HOST: host,
    DB_PORT: port,
    DB_USERNAME: username,
    DB_PASSWORD: password,
    DB_NAME: database,
} = process.env;

export const typeormConfig: DataSourceOptions = {
    type: 'postgres',
    host,
    port: port ? parseInt(port, 10) : undefined,
    username,
    password,
    database,
    synchronize: false,
    migrationsRun: true,
    migrations: ['dist/migrations/*.js'],
    entities: ['dist/entities/*.entity.js'],
};
