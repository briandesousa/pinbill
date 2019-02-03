import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingBillsContainerComponent } from './upcoming-bills-container/upcoming-bills-container.component';
import { UpcomingBillsListComponent } from './upcoming-bills-list/upcoming-bills-list.component';
import { BillEventsRoutingModule } from './bill-events-routing.module';

@NgModule({
  declarations: [
    UpcomingBillsContainerComponent, 
    UpcomingBillsListComponent],
  imports: [
    CommonModule,
    BillEventsRoutingModule
  ],
  exports: [
    UpcomingBillsContainerComponent
  ]
})
export class BillEventsModule { }
