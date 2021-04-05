import { TestBed } from '@angular/core/testing';

import { DiPrimeService } from './di-prime.service';

describe('DiPrimeService', () => {
  let service: DiPrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiPrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
