import { Injectable } from '@angular/core';
import { Promotion } from 'src/models/promotion';
import { PROMOTIONS } from 'src/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}
  getAllPromotions(): Promise<Promotion[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotionById(id: string): Promise<Promotion> {
    return new Promise((resolve, reject) => {
      let promotion: Promotion | undefined = PROMOTIONS.find(
        (p) => p.id === id
      );
      if (promotion) {
        setTimeout(() => resolve(promotion!), 2000);
      }
      setTimeout(
        () => reject('The promotion with given id was not found'),
        2000
      );
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(PROMOTIONS.filter((p) => p.featured)[0]), 2000)
    );
  }
}
