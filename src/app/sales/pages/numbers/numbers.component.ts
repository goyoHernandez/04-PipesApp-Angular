import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent {
  salesNeto: number = 2567789.5567;
  percentage: number = 0.4856;
  constructor() { }
}
