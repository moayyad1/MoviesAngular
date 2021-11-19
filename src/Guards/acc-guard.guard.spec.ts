import { TestBed } from '@angular/core/testing';

import { AccGuardGuard } from './acc-guard.guard';

describe('AccGuardGuard', () => {
  let guard: AccGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
