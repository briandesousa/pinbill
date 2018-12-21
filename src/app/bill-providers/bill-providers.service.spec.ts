import { TestBed } from '@angular/core/testing';

import { BillProvidersService } from './bill-providers.service';

describe('BillProvidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillProvidersService = TestBed.get(BillProvidersService);
    expect(service).toBeTruthy();
  });
});
