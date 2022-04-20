import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  constructor() { }

  nameLower: string = 'amy muñoz';
  nameUpper: string = 'AMY MUÑOZ';
  nameComplete: string = 'AmY MuÑoz';
  date: Date = new Date();

}
