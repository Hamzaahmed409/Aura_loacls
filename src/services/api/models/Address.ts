/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Buyer } from './Buyer';
import type { Seller } from './Seller';
import type { User } from './User';
export type Address = {
    street: string;
    city: string;
    state: string;
    pin_code: string;
    country: string;
    users: Array<User>;
    sellers: Array<Seller>;
    buyers: Array<Buyer>;
};

