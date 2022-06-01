import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';

interface IErrorHandler {
    handleErrors: (r: Response, e: Error) => Response;
}
export const ErrorHandler: IErrorHandler = {
    handleErrors(res: Response, e: Error): Response {
        const { message } = e;

        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message });
    },
};
