import { TestBed } from '@angular/core/testing';

import { ItemRequestsService } from './item-requests.service';

describe('ItemRequestsService', () => {
  let service: ItemRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
