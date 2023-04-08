import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Leader } from 'src/models/leader';
import { ProcessHTTPMsg } from './process-httpmsg.service.ts.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ProcessHTTPMsg
  ) {}

  baseUrl: string = environment.serverURL;

  getAllLeaders(): Observable<Leader[]> {
    return this.httpClient
      .get<Leader[]>(this.baseUrl + 'leadership')
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getLeaderById(id: string): Observable<Leader | undefined> {
    return this.httpClient
      .get<Leader>(`${this.baseUrl}leadership/${id}`)
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getFeaturedLeader(): Observable<Leader | undefined> {
    return this.httpClient.get<Leader[]>(`${this.baseUrl}leadership`).pipe(
      map((leaders) => leaders.find((l) => l.featured)),
      catchError((err) => this.errorHandler.errorHandler(err))
    );
  }
}
