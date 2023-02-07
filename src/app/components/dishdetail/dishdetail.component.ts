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
    this.dish = this.dishService.getDishById(id);
  }

  goBack() {
    this.location.back();
  }
}
