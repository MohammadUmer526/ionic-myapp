import { TestBed } from '@angular/core/testing';

import { ThirdService } from './third.service';

describe('ThirdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThirdService = TestBed.get(ThirdService);
    expect(service).toBeTruthy();
  });
});
