import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [
  ]
})
export class UncommonComponent {
  //i18nSelect
  name: string = 'Goyo H';
  genero: string = 'masculino';
  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clients: string[] = ['Maria', 'Pepe', 'Marc', 'Leon'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  constructor() { }

  deleteClient = () => {
    this.clients.splice(0, 1);
  }

  changeCliente = () => {
    this.name = 'Amy Muñoz Moreno';
    this.genero = 'Femenino';
  }

  //KeyValue Pipe

  person = {
    name: 'Goyin',
    edad: 26,
    address: 'Tlaxcala, Tlaxcala'
  }

  //JSONPipe

  heroes = [
    {
      name: 'Superman',
      vuela: true
    },
    {
      name: 'Robin',
      vuela: false
    },
    {
      name: 'KickAss',
      vuela: false
    }
  ]

  //Async Pipe
  myObservable = interval(5000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Exito');
    }, 3500)
  });
}
