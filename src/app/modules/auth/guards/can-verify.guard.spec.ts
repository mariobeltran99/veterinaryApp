import { TestBed } from '@angular/core/testing';

import { CanVerifyGuard } from './can-verify.guard';

describe('CanVerifyGuard', () => {
  let guard: CanVerifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVerifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
