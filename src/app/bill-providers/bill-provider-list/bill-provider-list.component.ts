import { Component, OnInit, Input } from '@angular/core';
import { BillProvidersService } from '../bill-providers.service';
import { BillProvider } from '../bill-provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill-provider-list',
  templateUrl: './bill-provider-list.component.html',
  styleUrls: ['./bill-provider-list.component.css']
})
export class BillProviderListComponent implements OnInit {

  @Input() displayAddProviderButton = true;

  billProviders$: Observable<BillProvider[]>;

  constructor(private billProviderService: BillProvidersService) { }

  ngOnInit() {
    this.billProviders$ = this.billProviderService.getBillProviders();
  }

}
