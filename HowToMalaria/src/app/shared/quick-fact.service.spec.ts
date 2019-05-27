import { TestBed } from '@angular/core/testing';

import { QuickFactService } from './quick-fact.service';

describe('QuickFactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickFactService = TestBed.get(QuickFactService);
    expect(service).toBeTruthy();
  });
});
