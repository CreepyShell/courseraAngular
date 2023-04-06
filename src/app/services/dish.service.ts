import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, filter, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dish } from 'src/models/dish';
import { DISHES } from 'src/models/dishes';
import { ProcessHTTPMsg } from './process-httpmsg.service.ts.service';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ProcessHTTPMsg
  ) {}
  baseUrl: string = environment.serverURL;

  getAllDishes(): Observable<Dish[]> {
    return this.httpClient
      .get<Dish[]>(this.baseUrl + 'dishes')
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getDishById(id: string): Observable<Dish | undefined> {
    return this.httpClient
      .get<Dish>(this.baseUrl + `dishes/${id}`)
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getFeaturedDish(): Observable<Dish | undefined> {
    return this.httpClient
      .get<Dish[]>(this.baseUrl + 'dishes')
      .pipe(map((dishes) => dishes.find((d) => d.featured)))
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  getDishIds(): Observable<string[]> {
    return this.httpClient
      .get<Dish[]>(this.baseUrl + 'dishes')
      .pipe(map((dishes) => dishes.map((d) => d.id)))
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }

  putDish(dish: Dish): Observable<Dish> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient
      .put<Dish>(`${this.baseUrl}dishes/${dish.id}`, dish, httpOptions)
      .pipe(catchError((err) => this.errorHandler.errorHandler(err)));
  }
}
