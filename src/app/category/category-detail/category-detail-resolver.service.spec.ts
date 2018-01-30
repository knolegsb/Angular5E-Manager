/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryDetailResolverService } from './category-detail-resolver.service';

describe('Service: CategoryDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryDetailResolverService]
    });
  });

  it('should ...', inject([CategoryDetailResolverService], (service: CategoryDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});