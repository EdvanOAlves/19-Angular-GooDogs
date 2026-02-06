import { TestBed } from '@angular/core/testing';

import { DogSearch } from './dog-search';

describe('DogSearch', () => {
  let service: DogSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
