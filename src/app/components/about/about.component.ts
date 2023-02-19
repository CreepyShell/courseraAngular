import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader.service';
import { Leader } from 'src/models/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  leaders: Leader[] | undefined;
  constructor(private leaderService: LeaderService) {}

  ngOnInit(): void {
    this.leaderService.getAllLeaders().then((r) => (this.leaders = r));
  }
}
