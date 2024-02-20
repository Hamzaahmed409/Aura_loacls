/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Buyer } from './Buyer';
import type { Seller } from './Seller';
import type { User } from './User';
export type UserRole = {
    user_role: string;
    user_id: string;
    buyer_id: string;
    seller_id: string;
    user: User;
    buyer: Buyer;
    seller: Seller;
};

