/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckedProductSetService } from './checked-product-set.service';

describe('Service: CheckedProductSet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckedProductSetService]
    });
  });

  it('should ...', inject([CheckedProductSetService], (service: CheckedProductSetService) => {
    expect(service).toBeTruthy();
  }));
});