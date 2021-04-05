import { TestBed } from '@angular/core/testing';

import { DiMockService } from './di-mock.service';

describe('DiMockService', () => {
  let service: DiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
