import { TestBed } from '@angular/core/testing';

import { DogSearchService } from './dog-search-service';

describe('DogSearchService', () => {
  let service: DogSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
