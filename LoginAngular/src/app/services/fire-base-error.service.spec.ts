import { TestBed } from '@angular/core/testing';

import { FireBaseErrorService } from './fire-base-error.service';

describe('FireBaseErrorService', () => {
  let service: FireBaseErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
