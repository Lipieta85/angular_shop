import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'products';


  constructor() { }

  ngOnInit() {
    firebase.initializeApp ({
      apiKey: "AIzaSyALpawzgQjKJRtoMqBms3rijgBd2UvVlmw",
      authDomain: "prodct-base.firebaseapp.com",
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
