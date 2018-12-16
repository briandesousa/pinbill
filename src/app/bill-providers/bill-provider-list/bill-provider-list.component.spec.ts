import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillProviderListComponent } from './bill-provider-list.component';

describe('BillProviderListComponent', () => {
  let component: BillProviderListComponent;
  let fixture: ComponentFixture<BillProviderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillProviderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
