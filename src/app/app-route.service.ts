import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './private/dashboard/dashboard.component';
import { PlayerComponent } from './private/player/player.component';
import { AuthGuardService } from './services/auth-gaurd.service';



const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'private',
    canActivate: [AuthGuardService],
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'player', component: PlayerComponent }
      ]
  },
  { path: '**', redirectTo: '/' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
