import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ParkingManagementComponent} from './parking-management/parking-management.component';


export const routes: Routes = [
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
  },
  {
    path: '', component: HomepageComponent, children: [
      {path: '', component: ParkingManagementComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }