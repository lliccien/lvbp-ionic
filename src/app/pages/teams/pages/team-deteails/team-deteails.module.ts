import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamDeteailsPage } from './team-deteails.page';

const routes: Routes = [
  {
    path: '',
    component: TeamDeteailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamDeteailsPage]
})
export class TeamDeteailsPageModule {}
