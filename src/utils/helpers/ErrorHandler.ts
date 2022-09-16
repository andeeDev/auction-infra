import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';

interface ServiceError extends Error {
    code?: number;
}

interface IErrorHandler {
    handleErrors: (r: Response, e: ServiceError) => Response;
}

export const ErrorHandler: IErrorHandler = {
    handleErrors(res: Response, e: ServiceError): Response {
        const { message, code } = e;
        const statusCode: number = code ?? HttpStatus.INTERNAL_SERVER_ERROR;

        return res.status(statusCode).send({ message });
    },
};
