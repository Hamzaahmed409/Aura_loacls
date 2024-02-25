/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { UserRole } from './UserRole';
export type Buyer = {
    id: string;
    company_name: string;
    company_registered_name: string;
    trade_license_no: string;
    date_of_incorporation: string;
    business_category: string;
    bank_name: string;
    bank_iban: string;
    bank_account_number: string;
    metadata: Record<string, any>;
    annual_turnover: string;
    registered_address_id: string;
    address: Address;
    roles: Array<UserRole>;
};

