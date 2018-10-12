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
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:c1af9dc1-1bb3-414c-9eb8-da5d6d0cebcf',

    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_r8MVhf5mp',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '19qhklt9887nijta4p2ds0p37r',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    // mandatorySignIn: false,

    // OPTIONAL - Configuration for cookie storage
    // cookieStorage: {
    // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    // domain: '.yourdomain.com',
    // OPTIONAL - Cookie path
    // path: '/',
    // OPTIONAL - Cookie expiration in days
    // expires: 365,
    // OPTIONAL - Cookie secure flag
    // secure: true
  }
});
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

