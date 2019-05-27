import { TestBed } from '@angular/core/testing';

import { RiskApiService } from './risk-api.service';

describe('RiskApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskApiService = TestBed.get(RiskApiService);
    expect(service).toBeTruthy();
  });
});
