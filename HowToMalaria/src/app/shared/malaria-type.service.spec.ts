import { TestBed } from '@angular/core/testing';

import { MalariaTypeService } from './malaria-type.service';

describe('MalariaTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariaTypeService = TestBed.get(MalariaTypeService);
    expect(service).toBeTruthy();
  });
});
