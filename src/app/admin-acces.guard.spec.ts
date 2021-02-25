import { TestBed } from '@angular/core/testing';

import { AdminAccesGuard } from './admin-acces.guard';

describe('AdminAccesGuard', () => {
  let guard: AdminAccesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAccesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
