import { TestBed } from '@angular/core/testing';

import { QuickFactApiService } from './quick-fact-api.service';

describe('QuickFactApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickFactApiService = TestBed.get(QuickFactApiService);
    expect(service).toBeTruthy();
  });
});
