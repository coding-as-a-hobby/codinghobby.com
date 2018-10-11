import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'app/services/player.service';
import { graphqlOperation } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';

import { IMedia } from '../aws/aws.component';

@Component({
  selector: 'app-usernavigation',
  templateUrl: './usernavigation.component.html',
  styleUrls: ['./usernavigation.component.scss']
})
export class UsernavigationComponent implements OnInit {
  leftLinks = ['aws', 'Sample link2'];
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
  message: IMedia;
  constructor(private amplifyService: AmplifyService, private _router: Router, private player: PlayerService) {
    console.log(this._router.url);
    this.player.currentMessage.subscribe((topic: IMedia) => {
      this.message = topic
    });
  }

  ngOnInit() {
  }
  onSignOut() {

    this.amplifyService.auth().signOut({ global: true })
      .then(data => {
        console.log(data);
        this._router.navigateByUrl('/')
      })
      .catch(err => console.log(err));

  }
  onTopic(item: IMedia, index: number) {
    this.player.changeMessage(item);
  }

}




@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
