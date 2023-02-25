import { Injectable } from '@angular/core';
import { delay, filter, Observable, of } from 'rxjs';
import { Dish } from 'src/models/dish';
import { DISHES } from 'src/models/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getAllDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDishById(id: string): Observable<Dish | undefined> {
    return of(DISHES.find((d) => d.id === id)).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((d) => d.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[]> {
    return of(DISHES.map((d) => d.id));
  }
}
