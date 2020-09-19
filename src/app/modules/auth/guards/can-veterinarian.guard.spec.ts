import { TestBed } from '@angular/core/testing';

import { CanVeterinarianGuard } from './can-veterinarian.guard';

describe('CanVeterinarianGuard', () => {
  let guard: CanVeterinarianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVeterinarianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
