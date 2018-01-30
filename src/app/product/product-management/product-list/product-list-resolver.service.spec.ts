/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductListResolverService } from './product-list-resolver.service';

describe('Service: ProductListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListResolverService]
    });
  });

  it('should ...', inject([ProductListResolverService], (service: ProductListResolverService) => {
    expect(service).toBeTruthy();
  }));
});