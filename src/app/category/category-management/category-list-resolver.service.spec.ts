/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryListResolverService } from './category-list-resolver.service';

describe('Service: CategoryListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryListResolverService]
    });
  });

  it('should ...', inject([CategoryListResolverService], (service: CategoryListResolverService) => {
    expect(service).toBeTruthy();
  }));
});