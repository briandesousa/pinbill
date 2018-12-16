import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill-provider-list',
  templateUrl: './bill-provider-list.component.html',
  styleUrls: ['./bill-provider-list.component.css']
})
export class BillProviderListComponent implements OnInit {

  @Input() displayAddProviderButton = true;

  constructor() { }

  ngOnInit() {
  }

}
