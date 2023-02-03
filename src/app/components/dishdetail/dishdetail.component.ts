import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/models/dish';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish | undefined;
  constructor() {}

  ngOnInit(): void {}
}
