import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBillsContainerComponent } from './upcoming-bills-container.component';

describe('BillEventListContainerComponent', () => {
  let component: UpcomingBillsContainerComponent;
  let fixture: ComponentFixture<UpcomingBillsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingBillsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBillsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
