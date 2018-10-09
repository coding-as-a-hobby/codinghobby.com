
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-gaurd.service';
import { AwsComponent } from './private/aws/aws.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'private',
    canActivate: [AuthGuardService],
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'aws', component: AwsComponent }
      ]
  },
  { path: '**', redirectTo: '/' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
