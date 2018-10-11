import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private amplifyService: AmplifyService,
    private _router: Router
  ) {}

  canActivate() {
    return this.amplifyService
      .auth()
      .currentAuthenticatedUser()
      .then(user => true)
      .catch(err => {
        this._router.navigateByUrl('/');
        return false;
      });
  }
}
