import { Component, OnInit } from '@angular/core';
import { Team } from '../../core/interfaces/team';
import { LvbpService } from '../../core/services/lvbp.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: Team[];

  constructor(private lvbpService: LvbpService) { }

  ngOnInit() {
    this.fetchTeams();

  }


  fetchTeams() {
    this.lvbpService.getTeams()
      .subscribe(teams => {
        this.teams = teams;
      });

  }

}
