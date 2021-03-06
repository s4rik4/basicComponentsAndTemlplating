import { Component } from '@angular/core';
import {Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular király';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  pipedemo = [
    {
      'id': 1,
      'name': 'puffancs'
    },
    {
      'id': 2,
      'name': 'Toj'
    },
    {
      'id': 3,
      'name': 'Balus'
    }
  ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'ot, csip, RVT, ugyelet';
  }

  demo(ev: MouseEvent){
    console.log(ev.screenX);
  }
}
