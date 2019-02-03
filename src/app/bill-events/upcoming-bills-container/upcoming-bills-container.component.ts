import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { BillEvent } from '../bill-event';

@Component({
  selector: 'app-upcoming-bills-container',
  templateUrl: './upcoming-bills-container.component.html',
  styleUrls: ['./upcoming-bills-container.component.css']
})
export class UpcomingBillsContainerComponent implements OnInit {

  private billEvents$ = of([
    new BillEvent(1, 1, 'Hydro Bill for $115.00', '2019-02-20T13:30:00-05:00', '2019-02-20T14:30:00-05:00'),
    new BillEvent(2, 2, 'Union Gas Bill for $95.30', '2019-02-23T13:30:00-05:00', '2019-02-23T14:30:00-05:00')
  ]);

  constructor() { }

  ngOnInit() {
  }

}
