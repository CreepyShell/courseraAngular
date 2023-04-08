import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHTTPMsg } from './process-httpmsg.service.ts.service';
import { environment } from 'src/environments/environment';
import { FeedBack } from 'src/models/feedback';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class FeedbackService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ProcessHTTPMsg
  ) {}

  baseUrl: string = environment.serverURL;

  submitFeedback(feedback: FeedBack): Observable<FeedBack> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient
      .post<FeedBack>(this.baseUrl + 'feedback', feedback, options)
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }
}
