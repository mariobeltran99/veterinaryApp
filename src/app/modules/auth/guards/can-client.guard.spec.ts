import { TestBed } from '@angular/core/testing';

import { CanClientGuard } from './can-client.guard';

describe('CanClientGuard', () => {
  let guard: CanClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
