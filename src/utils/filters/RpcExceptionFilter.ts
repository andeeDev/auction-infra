import { Catch, RpcExceptionFilter, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { Response } from 'express';
import { HttpArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';

interface ExceptionResponse {
    message: string[];
    error: string;
    statusCode: number;
}
@Catch()
export class RpcExceptionFilterMapping implements RpcExceptionFilter<any> {
    catch(exception: any, host: ArgumentsHost): Observable<any> {
        const context: HttpArgumentsHost = host.switchToHttp();
        const response: Response = context.getResponse<Response>();

        if (exception instanceof BadRequestException) {
            response
                .status(exception.getStatus())
                .send({ message: (exception.getResponse() as ExceptionResponse).message });
        }

        if (exception.code) {
            response.status(exception.code).send({ message: exception.message });
        }

        return throwError(() => {
            return exception.getError();
        });
    }
}
