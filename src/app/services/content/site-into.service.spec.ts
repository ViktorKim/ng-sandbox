import { TestBed } from '@angular/core/testing';

import { SiteIntoService } from './site-into.service';

describe('SiteIntoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteIntoService = TestBed.get(SiteIntoService);
    expect(service).toBeTruthy();
  });
});
