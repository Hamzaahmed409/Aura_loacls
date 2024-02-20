/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OtpDto } from '../models/OtpDto';
import type { OtpSuccessDto } from '../models/OtpSuccessDto';
import type { SuccessMessageDto } from '../models/SuccessMessageDto';
import type { VerifyLoginDto } from '../models/VerifyLoginDto';
import type { VerifySignupDto } from '../models/VerifySignupDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Login user
     * @param requestBody
     * @returns SuccessMessageDto
     * @throws ApiError
     */
    public static authControllerLogin(
        requestBody: OtpDto,
    ): CancelablePromise<SuccessMessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `User with specified mobile number does not exist`,
            },
        });
    }
    /**
     * Verify login OTP
     * @param requestBody
     * @returns SuccessMessageDto
     * @throws ApiError
     */
    public static authControllerVerify(
        requestBody: VerifyLoginDto,
    ): CancelablePromise<SuccessMessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Send signup OTP
     * @param requestBody
     * @returns SuccessMessageDto
     * @throws ApiError
     */
    public static authControllerSendOtp(
        requestBody: OtpDto,
    ): CancelablePromise<SuccessMessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/signup_otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Verify signup OTP
     * @param requestBody
     * @returns OtpSuccessDto
     * @throws ApiError
     */
    public static authControllerVerifyMobile(
        requestBody: VerifySignupDto,
    ): CancelablePromise<OtpSuccessDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify_signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
