import { TestBed } from '@angular/core/testing';

import { OidcServiceService } from './oidc-service.service';

describe('OidcServiceService', () => {
  let service: OidcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OidcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
