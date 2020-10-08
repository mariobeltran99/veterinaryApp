import { TestBed } from '@angular/core/testing';

import { CanSecretaryGuard } from './can-secretary.guard';

describe('CanSecretaryGuard', () => {
  let guard: CanSecretaryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanSecretaryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
