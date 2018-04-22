import { Shot } from './../interfaces/shot.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.less']
})
export class ShotComponent implements OnInit {
  @Input() shot: Shot;
  @Input() id: number;
  @Output() shotOverlay = new EventEmitter();
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.shot.description = this.shot.description.replace('<p>', '');
    this.shot.description = this.shot.description.replace('</p>', '');
  }

  onGetShot(event, data) {
    this.shotOverlay.emit(data);
    this.location.replaceState(`/shot/${data.id}`);
  }

}
