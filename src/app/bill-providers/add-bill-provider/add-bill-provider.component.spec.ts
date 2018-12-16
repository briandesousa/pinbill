import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillProviderComponent } from './add-bill-provider.component';

describe('AddBillProviderComponent', () => {
  let component: AddBillProviderComponent;
  let fixture: ComponentFixture<AddBillProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBillProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
