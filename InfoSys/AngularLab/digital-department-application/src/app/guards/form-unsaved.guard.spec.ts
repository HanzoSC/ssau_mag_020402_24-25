import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { formUnsavedGuard } from './form-unsaved.guard';

describe('formUnsavedGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formUnsavedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
