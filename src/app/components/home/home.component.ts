import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { LeaderService } from 'src/app/services/leader.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { environment } from 'src/environments/environment';
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

  baseUrl: string = environment.serverURL;
  homeErrMess: string = '';

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit(): void {
    this.dishService
      .getFeaturedDish()
      .subscribe({
        next: (d) => (this.dish = d),
        error: (err) => this.homeErrMess = err,
      });
    this.promotionService.getFeaturedPromotion().subscribe({
      next: (p) => (this.promotion = p),
      error: (err) => (this.homeErrMess = <any>err),
    });
    this.leaderService.getFeaturedLeader().subscribe((l) => (this.leader = l));
  }
}
