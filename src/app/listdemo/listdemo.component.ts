import { Component } from '@angular/core';
import {EventModel} from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: EventModel[];
  modifyEvent: EventModel;
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
    // const puf = this.events.reduce((x: EventModel, y: EventModel) => {
    //   // (logikai vuzsgálat) ? haigaz :hanem
    //   return x.id > y.id ? x : y;
    // }).id;
    // console.log(puf);
    this.modifyEvent = new EventModel('');
  }
  save (newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement){
    if (this.modifyEvent.id === 0) {
      // Új elemet hozunk létre...
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventPicInput.value)];
    } else {
      // itt tudjuk, hogy edit szakasz van, azaz meg kell keresni a meglfelelő elemet az id alapján
      this.events = this.events.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          // itt tudjuk, hogy ezt az elemet kell szerkeszteni
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventPicInput.value
          };
        } else {
          // itt tudjuk hogy nem akarunk módosítani
          return ev;
        }
      });
      // itt takarítsunk fel magunk után
      this.modifyEvent = new EventModel('');
    }
    newEventNameInput.value = '';
    newEventPicInput.value = '';
  }
  edit(id: number){
    // ha biztos, hogy van ilyen
    // Ha tudom hogy mindig csak 1 ilyen van
    this.modifyEvent = this.events.filter( (ev) => ev.id === id) [0];
  }
  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
