import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillProviderComponent } from './bill-provider.component';

describe('BillProviderComponent', () => {
  let component: BillProviderComponent;
  let fixture: ComponentFixture<BillProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
