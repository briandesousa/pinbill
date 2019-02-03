import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBillsListComponent } from './upcoming-bills-list.component';

describe('UpcomingBillsComponent', () => {
  let component: UpcomingBillsListComponent;
  let fixture: ComponentFixture<UpcomingBillsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingBillsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
