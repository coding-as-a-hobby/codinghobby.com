import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  specialPage = false;
  userState: string;
  user: any;
  userid: string;

  constructor(private amplifyService: AmplifyService, private _router: Router){
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$.subscribe(async authState => {
      this.userState = authState.state;
      console.log(this.userState);
      //#region user signin & signout staus update to dynamodb
      if (authState.state === 'signedIn') {
        const userSettings = await this.amplifyService.auth().currentUserInfo();
        this.specialPage = true;
        this.user = authState.user;
        this._router.navigateByUrl('/');
        // add user status to dynamoDB
        //#region User status into UserStatus DB

        /*const myInit = {
          body: {
            userid: userSettings["id"],
            username: this.user.username,
            email: userSettings.attributes["email"],
            signin: true
          }
        };
        this.amplifyService
          .api()
          .put("fondashv2UserStatus", "/userStatus", myInit)
          .catch(error => {
            // tslint:disable-next-line:no-console
            console.log(error.response);
          });*/

        //#endregion
        /*localStorage.setItem("userid", userSettings["id"]);
        localStorage.setItem("email", userSettings.attributes["email"]);
        localStorage.setItem(
          "username",
          userSettings.attributes["email"].split("@fonteva.com")[0]
        );*/
        //#region User details to UserPreference DB

        /*const myPref = {
          body: {
            userid: userSettings['id'],
            username: this.user.username,
            email: userSettings.attributes['email']
          }
        };
        this.amplifyService
          .api()
          .post('fondashv2UserPreferences', '/userPreferences', myPref)
          .catch(error => {
            // tslint:disable-next-line:no-console
            console.log(error.response);
          });*/

        //#endregion
      } else if (authState.state === 'signedOut') {
        this.user = null;
        // window.location.replace('/pages/login');
        // this._router.navigateByUrl('pages/login');
        this._router.navigateByUrl('/');
        /*if (
          localStorage.length > 0 &&
          localStorage.getItem("userid") !== null &&
          localStorage.getItem("email") !== null &&
          localStorage.getItem("username") !== null
        ) {
          // add user status to dynamoDB
          const myInit = {
            body: {
              userid: localStorage.getItem('userid'),
              username: localStorage.getItem('username'),
              email: localStorage.getItem('email'),
              signin: false
            }
          };
          this.amplifyService
            .api()
            .put('fondashv2UserStatus', '/userStatus', myInit)
            .catch(error => {
              // tslint:disable-next-line:no-console
              console.log(error.response);
            });
        }*/
      }
      //#endregion
    });
  }
}
