import { Component, OnInit } from '@angular/core';

import { LvbpService } from '../../core/services/lvbp.service';
import { League } from '../../core/interfaces/league';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage implements OnInit {

  constructor(private lvbpService: LvbpService) { }

  info: League;

  ngOnInit() {
    this.fetchLeague();
  }

  fetchLeague() {
    this.lvbpService.getLeagueInfo()
      .subscribe(info => {
        this.info = info;
      });

  }
}
