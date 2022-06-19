import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderFindComponent } from './pages/order-find/order-find.component';


@NgModule({
  declarations: [
    UserComponent,
    OrderHistoryComponent,
    OrderFindComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
