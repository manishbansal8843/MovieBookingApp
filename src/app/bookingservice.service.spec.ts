import { TestBed, inject } from '@angular/core/testing';

import { BookingserviceService } from './bookingservice.service';

describe('BookingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingserviceService]
    });
  });

  it('should be created', inject([BookingserviceService], (service: BookingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
