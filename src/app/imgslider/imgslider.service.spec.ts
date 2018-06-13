import { TestBed, inject } from '@angular/core/testing';

import { ImgsliderService } from './imgslider.service';

describe('ImgsliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgsliderService]
    });
  });

  it('should be created', inject([ImgsliderService], (service: ImgsliderService) => {
    expect(service).toBeTruthy();
  }));
});
