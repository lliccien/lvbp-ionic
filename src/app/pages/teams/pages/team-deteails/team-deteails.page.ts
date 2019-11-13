import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LvbpService } from '../../../../core/services/lvbp.service';
import { Team } from '../../../../core/interfaces/team';

@Component({
  selector: 'app-team-deteails',
  templateUrl: './team-deteails.page.html',
  styleUrls: ['./team-deteails.page.scss'],
})
export class TeamDeteailsPage implements OnInit {

  teamId: string;
  team: Team;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lvbpService: LvbpService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.teamId = params.id;
        console.log(this.teamId);
        this.lvbpService.getTeamById(this.teamId)
          .subscribe(team => {
            this.team = team;
          });

      });
  }

}
