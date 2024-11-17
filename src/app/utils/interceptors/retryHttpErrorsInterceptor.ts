import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { iif, throwError, Observable, timer } from 'rxjs';

interface RetryRequestOptions {
  maximumRetries: number;
  retryDelay: number;
}

@Injectable()
export class RetryHttpErrorsInterceptor implements HttpInterceptor {
  private readonly retryRequestOptions: RetryRequestOptions = {
    maximumRetries: 2,
    retryDelay: 200,
  };

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(this.retryPipe());
  }

  retryPipe<T>() {
    return retry<T>({
      count: this.retryRequestOptions.maximumRetries,
      delay: (error: HttpErrorResponse, retryCount: number) =>
        iif(
          () => error.status < 500 && error.status !== 0,
          throwError(() => error),
          timer(this.retryRequestOptions.retryDelay * retryCount)
        ),
    });
  }
}
