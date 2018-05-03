/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListServiceService } from './list-service.service';

describe('Service: ListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListServiceService]
    });
  });

  it('should ...', inject([ListServiceService], (service: ListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
