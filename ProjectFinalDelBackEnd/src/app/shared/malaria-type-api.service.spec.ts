import { TestBed } from '@angular/core/testing';

import { MalariaTypeApiService } from './malaria-type-api.service';

describe('MalariaTypeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariaTypeApiService = TestBed.get(MalariaTypeApiService);
    expect(service).toBeTruthy();
  });
});
