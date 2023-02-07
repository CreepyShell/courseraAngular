import { Injectable } from '@angular/core';
import { Dish } from 'src/models/dish';
import { DISHES } from 'src/models/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getAllDishes(): Dish[] {
    return DISHES;
  }
  getDishById(id: string): Dish | undefined {
    return DISHES.find((d) => d.id === id);
  }
  getFeaturedDish(): Dish {
    return DISHES.filter((d) => d.featured)[0];
  }
}
