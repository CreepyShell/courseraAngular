import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessHTTPMsg {
  constructor() {}

  public errorHandler(err: HttpErrorResponse | any) {
    if (err instanceof ErrorEvent) {
      return throwError(() => err.error.message);
    }
    return throwError(
      () => `${err.status} - ${err.statusText || ''}  ${err.error}`
    );
  }
}
