import { TestBed, inject } from '@angular/core/testing';

import { MovieFetchService } from './movie-fetch.service';

describe('MovieFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieFetchService]
    });
  });

  it('should be created', inject([MovieFetchService], (service: MovieFetchService) => {
    expect(service).toBeTruthy();
  }));
});
