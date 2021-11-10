import { TestBed } from '@angular/core/testing';

import { TetsGuard } from './tets.guard';

describe('TetsGuard', () => {
  let guard: TetsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TetsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
