import { TestBed } from '@angular/core/testing';

import { MelodiesapiService } from './melodiesapi.service';

describe('MelodiesapiService', () => {
  let service: MelodiesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MelodiesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
