/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Seller } from '../models/Seller';
import type { SignupDto } from '../models/SignupDto';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Get All Users
     * @returns User
     * @throws ApiError
     */
    public static userControllerAll(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create user and seller profiles
     * @param requestBody
     * @returns Seller
     * @throws ApiError
     */
    public static userControllerSignup(
        requestBody: SignupDto,
    ): CancelablePromise<Seller> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
}
