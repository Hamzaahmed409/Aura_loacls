/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { UserRole } from './UserRole';
export type User = {
    first_name: string;
    last_name: string;
    email: string;
    country_code: string;
    mobile_number: string;
    is_email_verified: boolean;
    is_mobile_verified: boolean;
    address_id: string;
    address: Address;
    roles: Array<UserRole>;
};

