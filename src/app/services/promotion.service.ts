import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Promotion } from 'src/models/promotion';
import { ProcessHTTPMsg } from './process-httpmsg.service.ts.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ProcessHTTPMsg
  ) {}

  baseUrl: string = environment.serverURL;

  getAllPromotions(): Observable<Promotion[]> {
    return this.httpClient
      .get<Promotion[]>(this.baseUrl + 'promotions')
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getPromotionById(id: string): Observable<Promotion | undefined> {
    return this.httpClient
      .get<Promotion>(`${this.baseUrl}promotions/${id}`)
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getFeaturedPromotion(): Observable<Promotion | undefined> {
    return this.httpClient.get<Promotion[]>(this.baseUrl + 'promotions').pipe(
      map((promotions) => promotions.find((p) => p.featured)),
      catchError((err) => this.errorHandler.errorHandler(err))
    );
  }
}
