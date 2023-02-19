import { Injectable } from '@angular/core';
import { Leader } from 'src/models/leader';
import { LEADERS } from 'src/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getAllLeaders(): Promise<Leader[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeaderById(id: string): Promise<Leader> {
    return new Promise((resolve, reject) => {
      let leader: Leader | undefined = LEADERS.find((l) => l.id === id);
      if (leader) {
        setTimeout(() => resolve(leader!), 2000);
      }
      setTimeout(() => reject('The leader with given id was not found'), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(LEADERS.filter((l) => l.featured)[0]), 2000)
    );
  }
}
