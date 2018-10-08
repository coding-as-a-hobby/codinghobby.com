import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  signInForm: FormGroup;
  signupForm: FormGroup;
  playlist: Array<IMedia> = [
    {
      title: 'Pale Blue Dot',
      src: 'https://s3.amazonaws.com/codinghobby.com/2018+Future+of+Python+and+Why+we+need+learn.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];


  constructor(public fb: FormBuilder) {
  this.signInForm = fb.group({
    darkFormEmailEx: ['', [Validators.required, Validators.email]],
    darkFormPasswordEx: ['', Validators.required],
  });
  this.signupForm = fb.group({
    darkFormEmailEx: ['', [Validators.required, Validators.email]],
    darkFormPasswordEx: ['', Validators.required],
  });
}

  ngOnInit() {
  }

}
