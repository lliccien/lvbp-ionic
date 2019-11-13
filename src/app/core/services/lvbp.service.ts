import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { League } from '../interfaces/league';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class LvbpService {

  constructor(private http: HttpClient) { }

  getLeagueInfo() {
    return this.http.get<League>(`${environment.bUrl}/info`);
  }

  getTeams() {
    return this.http.get<Team[]>(`${environment.bUrl}/teams`);
  }
}
