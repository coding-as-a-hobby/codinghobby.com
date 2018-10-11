import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userState: string;
  user: any;

  constructor(private amplifyService: AmplifyService, private _router: Router) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$.subscribe(async authState => {
      this.userState = authState.state;
      if (authState.state === 'signedIn') {
        const userSettings = await this.amplifyService.auth().currentUserInfo();
        this.user = authState.user;
        this._router.navigateByUrl('/private/dashboard');
      } else if (authState.state === 'signedOut') {
        this.user = null;
        this._router.navigateByUrl('/');
      }
    });
  }
}
