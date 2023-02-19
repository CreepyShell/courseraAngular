import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Location } from '@angular/common';
import { Dish } from 'src/models/dish';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish | undefined;
  constructor(
    private dishService: DishService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.dishService
      .getDishById(id)
      .then((d) => (this.dish = d))
      .catch(() => {
        this.dish = {
          name: 'not found',
          description: 'not found',
          image: '',
          id: '-1',
          category: '',
          featured: false,
          label: '',
          price: '',
          comments: [],
        };
      });
  }

  goBack() {
    this.location.back();
  }
}
