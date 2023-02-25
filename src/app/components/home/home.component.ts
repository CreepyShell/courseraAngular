import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { LeaderService } from 'src/app/services/leader.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { Dish } from 'src/models/dish';
import { Leader } from 'src/models/leader';
import { Promotion } from 'src/models/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish | undefined;
  promotion: Promotion | undefined;
  leader: Leader | undefined;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe((d) => (this.dish = d));
    this.promotionService
      .getFeaturedPromotion()
      .subscribe((p) => (this.promotion = p));
    this.leaderService.getFeaturedLeader().subscribe((l) => (this.leader = l));
  }
}
