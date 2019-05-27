import { TestBed } from '@angular/core/testing';

import { PreventativeMeasuresApiService } from './preventative-measures-api.service';

describe('PreventativeMeasuresApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreventativeMeasuresApiService = TestBed.get(PreventativeMeasuresApiService);
    expect(service).toBeTruthy();
  });
});
