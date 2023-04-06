import { Component, OnInit } from '@angular/core';
import { expand, flyInOut } from 'src/app/animations/app.animations';
import { DishService } from 'src/app/services/dish.service';
import { environment } from 'src/environments/environment';
import { Dish } from 'src/models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), expand()],
})
export class MenuComponent implements OnInit {
  selectedDish: Dish | undefined;
  constructor(private _dishService: DishService) {}
  dishes: Dish[] | undefined;
  baseUrl: string = environment.serverURL;
  menuErrMess: string = '';

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  ngOnInit(): void {
    this._dishService.getAllDishes().subscribe({
      next: (d) => (this.dishes = d),
      error: (err) => (this.menuErrMess = <any>err),
    });
  }
}
