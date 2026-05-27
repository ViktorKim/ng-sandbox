import { TestBed } from '@angular/core/testing';

import { NewLastSerService } from './new-last-ser.service';

describe('NewLastSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewLastSerService = TestBed.get(NewLastSerService);
    expect(service).toBeTruthy();
  });
});
