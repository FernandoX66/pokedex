import { TestBed } from '@angular/core/testing';

import { PokemonRequestsService } from './pokemon-requests.service';

describe('PokemonRequestsService', () => {
  let service: PokemonRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
