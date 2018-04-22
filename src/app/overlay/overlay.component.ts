import { Shot } from './../interfaces/shot.interface';
import { User } from './../interfaces/user.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less']
})
export class OverlayComponent implements OnInit {
  @Input() shotOverlay: Shot;
  @Input() user: User;
  @Output() displayOverlay = new EventEmitter();

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.displayOverlay.emit(false);
    this.location.replaceState('');
  }
}
