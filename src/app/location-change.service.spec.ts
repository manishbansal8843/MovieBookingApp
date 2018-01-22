import { TestBed, inject } from '@angular/core/testing';

import { LocationChangeService } from './location-change.service';

describe('LocationChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationChangeService]
    });
  });

  it('should be created', inject([LocationChangeService], (service: LocationChangeService) => {
    expect(service).toBeTruthy();
  }));
});
