import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  enMayusculas: boolean = false;
  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.blue
    },
    {
      name: 'Spiderman',
      flying: false,
      color: Color.red
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black
    },
    {
      name: 'Linterna verde',
      flying: true,
      color: Color.green
    }
  ];

  constructor() { }

  applyUpperCase = () => {
    this.enMayusculas = !this.enMayusculas;
  }

  orderByValue = (value: string) => {

    this.orderBy = value;
  }
}
