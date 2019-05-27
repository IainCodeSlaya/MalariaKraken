import { TestBed } from '@angular/core/testing';

import { HealthAdminApiService } from './health-admin-api.service';

describe('HealthAdminApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthAdminApiService = TestBed.get(HealthAdminApiService);
    expect(service).toBeTruthy();
  });
});
