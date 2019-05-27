import { TestBed } from '@angular/core/testing';

import { InfectionCycleApiService } from './infection-cycle-api.service';

describe('InfectionCycleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfectionCycleApiService = TestBed.get(InfectionCycleApiService);
    expect(service).toBeTruthy();
  });
});
