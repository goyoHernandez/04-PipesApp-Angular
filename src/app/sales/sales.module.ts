import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FlyingPipe } from './pipes/flying.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    BasicsComponent,
    NumbersComponent,
    OrderComponent,
    UncommonComponent,
    MayusculasPipe,
    FlyingPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BasicsComponent,
    NumbersComponent,
    OrderComponent,
    UncommonComponent
  ]
})
export class SalesModule { }
