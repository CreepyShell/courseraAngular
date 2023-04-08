import { Component, OnInit } from '@angular/core';
import { expand, flyInOut } from 'src/app/animations/app.animations';
import { LeaderService } from 'src/app/services/leader.service';
import { environment } from 'src/environments/environment';
import { Leader } from 'src/models/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;',
  },
  animations: [flyInOut(), expand()],
})
export class AboutComponent implements OnInit {
  leaders: Leader[] | undefined;
  constructor(private leaderService: LeaderService) {}

  contErrMess: string = '';
  baseUrl = environment.serverURL;

  ngOnInit(): void {
    this.leaderService.getAllLeaders().subscribe({
      next: (r) => (this.leaders = r),
      error: (err) => (this.contErrMess = err),
    });
  }
}
