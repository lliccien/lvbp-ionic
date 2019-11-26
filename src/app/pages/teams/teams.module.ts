import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamsPage } from './teams.page';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage
  },
  { path: 'team/:id', loadChildren: () => import('./pages/team-deteails/team-deteails.module').then(m => m.TeamDeteailsPageModule) }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamsPage, TeamComponent]
})
export class TeamsPageModule { }
