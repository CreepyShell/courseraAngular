import { Injectable } from '@angular/core';
import { Leader } from 'src/models/leader';
import { LEADERS } from 'src/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getAllLeaders(): Leader[] {
    return LEADERS;
  }
  getLeaderById(id: string): Leader | undefined {
    return LEADERS.find((l) => l.id === id);
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((l) => l.featured)[0];
  }
}
