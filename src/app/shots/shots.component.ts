import { ShotsService } from './../services/shots.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShotComponent } from '../shot/shot.component';
import { Shot } from '../interfaces/shot.interface';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.less']
})
export class ShotsComponent implements OnInit, OnDestroy {
  shots: Shot[];
  user: User;
  shotOverlay: Shot;
  displayOverlay = false;
  private subscription: ISubscription;

  constructor(
    private shotsServices: ShotsService,
  ) {}

  ngOnInit() {
    this.subscription = this.shotsServices.getShots().subscribe((data) => {
      this.shots = data;
    });

    this.subscription = this.shotsServices.getUser().subscribe((data) => {
      this.user = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onReceiveShot(receivedShot) {
    this.shotOverlay = receivedShot;
    this.displayOverlay = true;
  }

  getClose(hide) {
    this.displayOverlay = hide;
  }

}


