import { TestBed } from '@angular/core/testing';

import { SymptomApiService } from './symptom-api.service';

describe('SymptomApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymptomApiService = TestBed.get(SymptomApiService);
    expect(service).toBeTruthy();
  });
});
