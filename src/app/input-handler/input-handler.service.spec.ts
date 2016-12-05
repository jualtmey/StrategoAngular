/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InputHandlerService } from './input-handler.service';

describe('InputHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputHandlerService]
    });
  });

  it('should ...', inject([InputHandlerService], (service: InputHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
