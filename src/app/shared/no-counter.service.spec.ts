/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NoCounterService } from './no-counter.service';

describe('Service: NoCounter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoCounterService]
    });
  });

  it('should ...', inject([NoCounterService], (service: NoCounterService) => {
    expect(service).toBeTruthy();
  }));
});