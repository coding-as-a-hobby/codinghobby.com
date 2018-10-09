import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMedia } from 'app/private/aws/aws.component';


@Injectable()
export class PlayerService {

  // tslint:disable-next-line:max-line-length
  private messageSource: BehaviorSubject<IMedia> = new BehaviorSubject({ title: 'Pale Blue Dot', src: 'https://s3.amazonaws.com/codinghobby.com/2018+Future+of+Python+and+Why+we+need+learn.mp4', type: 'video/mp4' });
  currentMessage: Observable<IMedia> = this.messageSource.asObservable();

  constructor() { }

  changeMessage(topic: IMedia) {
    this.messageSource.next(topic)
  }

}
