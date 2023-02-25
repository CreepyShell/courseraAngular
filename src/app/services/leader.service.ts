import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Leader } from 'src/models/leader';
import { LEADERS } from 'src/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getAllLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeaderById(id: string): Observable<Leader | undefined> {
    return of(LEADERS.find((l) => l.id === id)).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((l) => l.featured)[0]).pipe(delay(2000));
  }
}
