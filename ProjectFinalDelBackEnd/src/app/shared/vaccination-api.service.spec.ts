import { TestBed } from '@angular/core/testing';

import { VaccinationApiService } from './vaccination-api.service';

describe('VaccinationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaccinationApiService = TestBed.get(VaccinationApiService);
    expect(service).toBeTruthy();
  });
});
