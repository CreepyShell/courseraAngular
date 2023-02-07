import { Injectable } from '@angular/core';
import { Promotion } from 'src/models/promotion';
import { PROMOTIONS } from 'src/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}
  getAllPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotionById(id: string) {
    return PROMOTIONS.find((p) => p.id === id);
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((p) => p.featured)[0];
  }
}
