import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Promotion } from 'src/models/promotion';
import { PROMOTIONS } from 'src/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}
  getAllPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotionById(id: string): Observable<Promotion | undefined> {
    return of(PROMOTIONS.find((p) => p.id === id)).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((p) => p.featured)[0]).pipe(delay(2000));
  }
}
