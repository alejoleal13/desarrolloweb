import { TestBed, inject } from '@angular/core/testing';

import { AddsemestreService } from './addsemestre.service';

describe('AddsemestreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsemestreService]
    });
  });

  it('should be created', inject([AddsemestreService], (service: AddsemestreService) => {
    expect(service).toBeTruthy();
  }));
});
