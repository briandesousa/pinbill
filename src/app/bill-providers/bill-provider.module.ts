import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillProviderRoutingModule } from './bill-provider-routing.module';
import { BillProviderListComponent } from './bill-provider-list/bill-provider-list.component';
import { AddBillProviderComponent } from './add-bill-provider/add-bill-provider.component';
import { BillProviderComponent } from './bill-provider/bill-provider.component';

@NgModule({
  declarations: [
    BillProviderComponent,
    BillProviderListComponent, 
    AddBillProviderComponent
  ],
  imports: [
    CommonModule,
    BillProviderRoutingModule
  ]
})
export class BillProviderModule { }
