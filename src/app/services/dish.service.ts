import { Injectable } from '@angular/core';
import { Dish } from 'src/models/dish';
import { DISHES } from 'src/models/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getAllDishes(): Promise<Dish[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDishById(id: string): Promise<Dish> {
    return new Promise((resolve, reject) => {
      let dish: Dish | undefined = DISHES.find((d) => d.id === id);
      if (dish) {
        setTimeout(() => resolve(dish!), 2000);
      }
      setTimeout(() => reject('The dish with given id was not found'), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(DISHES.filter((d) => d.featured)[0]), 2000)
    );
  }
}
