import { TestBed } from '@angular/core/testing';

import { InfectionCycleService } from './infection-cycle.service';

describe('InfectionCycleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfectionCycleService = TestBed.get(InfectionCycleService);
    expect(service).toBeTruthy();
  });
});
