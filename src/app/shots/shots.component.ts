import { ShotsService } from './../services/shots.service';
import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ShotComponent } from '../shot/shot.component';
import { Shot } from '../interfaces/shot.interface';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.less']
})
export class ShotsComponent implements OnInit, OnDestroy {
  shots: Shot[];
  private subscription: ISubscription;

  constructor(
    private shotsServices: ShotsService
  ) { }

  ngOnInit() {
    this.subscription = this.shotsServices.getShots().subscribe((data) => {
      this.shots = data;
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


