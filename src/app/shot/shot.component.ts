import { Shot } from './../interfaces/shot.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.less']
})
export class ShotComponent implements OnInit {
  @Input() shot: Shot;
  constructor() { }

  ngOnInit() {
  }

}
