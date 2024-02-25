/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadResultDto } from '../models/UploadResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocumentService {
    /**
     * @param formData
     * @returns UploadResultDto
     * @throws ApiError
     */
    public static documentControllerUploadFiles(
        formData: {
            files: Array<Blob>;
            folder_name: string;
            seller_id: string;
            document_type: 'bank_statement' | 'trade_license';
            is_perfios?: boolean;
        },
    ): CancelablePromise<UploadResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/document/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
