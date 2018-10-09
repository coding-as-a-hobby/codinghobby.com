import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure({
  region: 'us-east-1',
  authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  API: {
    graphql_endpoint:
      'https://bhiymgickjbang44esenmvgh5e.appsync-api.us-east-1.amazonaws.com/graphql',
    graphql_headers: async (Router) => ({
      Authorization: await Auth.currentAuthenticatedUser().then(user => {
        if (user.signInUserSession !== null) {
          return `${user.signInUserSession.idToken.jwtToken}`;
        } else {
          Router.navigateByUrl('/');
        }
      })
    })
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

