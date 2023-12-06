import React from 'react';
import Home from './pages/Home';
import ExchangeRate from './pages/ExchangeRate';
import { IndexRouteObject } from 'react-router-dom';

export interface AppRoute extends Partial<IndexRouteObject> {
    path: string;
    Component: React.ComponentType | null;
}

export enum RoutesPath {
    HOME = '/',
    ExchangeRate = '/exchange-rate',
}

export const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/exchange-rate',
        Component: ExchangeRate,
    },
];
