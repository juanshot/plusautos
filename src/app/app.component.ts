import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'az-root',
  encapsulation: ViewEncapsulation.None,
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 

  ngOnInit(){
      var firebaseConfig =  {
        apiKey: "AIzaSyC9cK1rmDqcJcUbQc0_4U80nc8QQUsDgHY",
        authDomain: "masautos-aaa7f.firebaseapp.com",
        databaseURL: "https://masautos-aaa7f.firebaseio.com",
        projectId: "masautos-aaa7f",
        storageBucket: "masautos-aaa7f.appspot.com",
        messagingSenderId: "609667341516"
    }
    firebase.initializeApp(firebaseConfig);
  }
}
