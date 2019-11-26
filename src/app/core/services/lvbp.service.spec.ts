import { TestBed } from '@angular/core/testing';

import { LvbpService } from './lvbp.service';

describe('LvbpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LvbpService = TestBed.get(LvbpService);
    expect(service).toBeTruthy();
  });
});
