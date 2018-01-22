import { TestBed, inject } from '@angular/core/testing';

import { TheaterFetchService } from './theater-fetch.service';

describe('TheaterFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheaterFetchService]
    });
  });

  it('should be created', inject([TheaterFetchService], (service: TheaterFetchService) => {
    expect(service).toBeTruthy();
  }));
});
