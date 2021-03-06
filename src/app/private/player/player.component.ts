import { Component } from '@angular/core';
import { PlayerService } from 'app/services/player.service';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  currentIndex = 0;
  currentItem: IMedia;
  api: VgAPI;
  message: string;

  constructor(private player: PlayerService) {
    this.player.currentMessage.subscribe((topic: IMedia) => {
      this.onClickPlaylistItem(topic);
    });
  }

  onPlayerReady(api: VgAPI) {
    console.log('Player is ready');
    console.log(api);
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    // this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  /*nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }*/

  playVideo() {
    this.api.play();
  }

  onClickPlaylistItem(item: IMedia, index?: number) {
    this.currentIndex = index;
    this.currentItem = item;
  }
}
