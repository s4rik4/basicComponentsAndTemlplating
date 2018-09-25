import { Component } from '@angular/core';
import {EventModel} from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: EventModel[];
  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'http://www.erdon.ro/2018/04/index111-1.jpg'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpaTz2c4IhnrOxmAC3OAjP-nwDp8Hyi25WG-pHOYVJa5ZIljUaQ'
      },
      {
        id: 3,
        name: 'rockmaraton',
        pic: 'https://tixa.hu/kepek/0004/4101-1.jpg'
      }
    ];
    console.log('megjott a listdemo cmp');
    const puf = this.events.reduce((x: EventModel, y: EventModel) => {
      // (logikai vuzsgálat) ? haigaz :hanem
      return x.id > y.id ? x : y;
    }).id;
    console.log(puf);
  }
  add (newEventNameInput: HTMLInputElement){
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value)];
    newEventNameInput.value = '';
  }
  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
