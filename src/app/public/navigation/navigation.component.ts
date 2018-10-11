import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  signinForm: FormGroup;
  signupForm: FormGroup;
  confirmForm: FormGroup;

  constructor(public fb: FormBuilder, private amplifyService: AmplifyService, private _route: Router) {
    this.signinForm = fb.group({
      username: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password: [null, [Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
    });
    this.signupForm = fb.group({
      username: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      /*confirmpassword: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      phone: [null, [Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],*/
    });
    this.confirmForm = fb.group({
      code: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  ngOnInit() {}

  onSignIn() {
    this.amplifyService.auth().signIn(this.signinForm.value.username, this.signinForm.value.password)
      .then(user => {
        this.signinForm.reset();
        this._route.navigateByUrl('/private/dashboard');
      })
      .catch(err => {
        console.log(err);
        this._route.navigateByUrl('/');
      });
  }

  onSignUp() {
    this.amplifyService.auth().signUp({
      username: this.signupForm.value.username,
      password: this.signupForm.value.password,
      attributes: {
        email: this.signupForm.value.email
        // phone_number: this.signupForm.value.phone,
        // other custom attributes
      },
      validationData: []  // optional
    })
      .then(data => {
        this.signupForm.reset();
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  onConfirm() {
    this.amplifyService.auth().confirmSignUp(this.signupForm.value.username, this.confirmForm.value.code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {
      this.confirmForm.reset();
      console.log(data);
    })
      .catch(err => console.log(err));
  }

}
