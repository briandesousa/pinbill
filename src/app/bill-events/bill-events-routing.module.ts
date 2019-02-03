import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingBillsContainerComponent } from './upcoming-bills-container/upcoming-bills-container.component';

const routes: Routes = [
  { 
    path: 'upcoming-bills', 
    component: UpcomingBillsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillEventsRoutingModule { }
