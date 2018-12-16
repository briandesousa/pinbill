import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillProviderListComponent } from './bill-provider-list/bill-provider-list.component';
import { AddBillProviderComponent } from './add-bill-provider/add-bill-provider.component';
import { BillProviderComponent } from './bill-provider/bill-provider.component';

const routes: Routes = [
  { 
    path: 'bill-providers', 
    component: BillProviderComponent,
    children: [
      { path: '', component: BillProviderListComponent },
      { path: 'add', component: AddBillProviderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillProviderRoutingModule { }
