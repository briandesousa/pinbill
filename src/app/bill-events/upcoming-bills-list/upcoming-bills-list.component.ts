import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BillEvent } from '../bill-event';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-upcoming-bills-list',
  templateUrl: './upcoming-bills-list.component.html',
  styleUrls: ['./upcoming-bills-list.component.css']
})
export class UpcomingBillsListComponent implements OnInit {

  @Input() billEvents: BillEvent[];
  
  constructor() { }

  ngOnInit() {
  }

}
