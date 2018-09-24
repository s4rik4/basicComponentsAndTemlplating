import { Component } from '@angular/core';
export class Eventmodel {
  id: number;
  name: string;
}
@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: Eventmodel[];
  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget'
      },
      {
        id: 2,
        name: 'fezen'
      },
      {
        id: 3,
        name: 'rockmaraton'
      }
    ];
    console.log('megjott a listdemo cmp');
  }
  add (newEventNameInput){
    console.log(newEventNameInput);
  }
  delete(id: number) {
    this.events = this.events.filter((ev: Eventmodel) => ev.id !== id);
  }
}
