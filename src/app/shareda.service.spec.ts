import { TestBed } from '@angular/core/testing';

import { SharedaService } from './shareda.service';

describe('SharedaService', () => {
  let service: SharedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
