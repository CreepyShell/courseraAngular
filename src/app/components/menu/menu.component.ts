import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { Dish } from 'src/models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  selectedDish: Dish | undefined;
  constructor(private _dishService: DishService) {}
  dishes: Dish[] = this._dishService.getDishes();
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  ngOnInit(): void {}
}
