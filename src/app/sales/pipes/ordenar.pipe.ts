import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = ''): Heroe[] {
    let heroesSort: Heroe[] = heroes;

    switch (orderBy) {
      case 'name': heroesSort = heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
      case 'flying': heroesSort = heroes.sort((a, b) => (a.flying > b.flying) ? -1 : 1);
        break;
      case 'color': heroesSort = heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
        break;
      default:
        heroesSort
        break;
    }
    return heroesSort;
  }
}