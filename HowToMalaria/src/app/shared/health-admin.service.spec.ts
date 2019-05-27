import { TestBed } from '@angular/core/testing';

import { HealthAdminService } from './health-admin.service';

describe('HealthAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthAdminService = TestBed.get(HealthAdminService);
    expect(service).toBeTruthy();
  });
});
