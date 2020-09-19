import { TestBed } from '@angular/core/testing';

import { CanGrocerGuard } from './can-grocer.guard';

describe('CanGrocerGuard', () => {
  let guard: CanGrocerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanGrocerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
