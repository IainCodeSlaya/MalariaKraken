import { TestBed } from '@angular/core/testing';

import { PreventitiveMeasureService } from './preventitive-measure.service';

describe('PreventitiveMeasureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreventitiveMeasureService = TestBed.get(PreventitiveMeasureService);
    expect(service).toBeTruthy();
  });
});
