import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderFindComponent } from './pages/order-find/order-find.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
      {
        path: 'order-find',
        component: OrderFindComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
