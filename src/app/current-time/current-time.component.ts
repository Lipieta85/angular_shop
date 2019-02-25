import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  currentTime: any;

  constructor() { }

  ngOnInit() {
    this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
