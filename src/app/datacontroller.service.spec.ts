import { TestBed } from '@angular/core/testing';

import { DataController } from './datacontroller.service';

describe('Datacontroller', () => {
  let service: DataController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
