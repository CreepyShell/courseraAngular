import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Location } from '@angular/common';
import { Dish } from 'src/models/dish';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish | undefined;
  dishIds: string[] = [];
  prev: string | undefined;
  next: string | undefined;

  constructor(
    private dishService: DishService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe((ids) => (this.dishIds = ids));
    this.router.params
      .pipe(
        switchMap((param: Params) => this.dishService.getDishById(param['id']))
      )
      .subscribe({
        next: (d) => {
          if (d) {
            this.dish = d;
            this.setPrevNextDish(this.dish.id);
            return;
          }
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
          this.next = '0';
          this.prev = '0';
        }
      });
  }

  setPrevNextDish(currId: string): void {
    let index = this.dishIds.indexOf(currId);
    this.prev =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack() {
    this.location.back();
  }
}
