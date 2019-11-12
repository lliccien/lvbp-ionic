import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  { path: 'league', loadChildren: () => import('./pages/league/league.module').then(m => m.LeaguePageModule) },
  { path: 'teams', loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
