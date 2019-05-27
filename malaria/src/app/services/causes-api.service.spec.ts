import { TestBed } from '@angular/core/testing';

import { CausesApiService } from './causes-api.service';

describe('CausesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CausesApiService = TestBed.get(CausesApiService);
    expect(service).toBeTruthy();
  });
});
