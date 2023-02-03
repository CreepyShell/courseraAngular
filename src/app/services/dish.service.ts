import { Injectable } from '@angular/core';
import { Dish } from 'src/models/dish';
import { DISHES } from 'src/models/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Dish[] {
    return DISHES;
  }
}
