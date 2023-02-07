import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { Dish } from 'src/models/dish';
import { Promotion } from 'src/models/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish | undefined;
  promotion: Promotion | undefined;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }
}
