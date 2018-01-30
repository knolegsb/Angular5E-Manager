/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionAuthGuardService } from './session-auth-guard.service';

describe('Service: SessionAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionAuthGuardService]
    });
  });

  it('should ...', inject([SessionAuthGuardService], (service: SessionAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});