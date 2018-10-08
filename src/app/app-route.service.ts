
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AwsComponent } from './public/aws/aws.component';
import { MyaccountComponent } from './public/myaccount/myaccount.component';

const routes: Route[] = [
  // { path: '', pathMatch: 'full', redirectTo: 'pages/aws-guest' },
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'public', children:
      [
        { path: 'myaccount', component: MyaccountComponent },
        { path: 'aws', component: AwsComponent },
      ]
  },
  { path: '**', redirectTo: '/' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
