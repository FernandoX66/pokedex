import { TestBed } from '@angular/core/testing';

import { PokemonFavoritesService } from './pokemon-favorites.service';

describe('PokemonFavoritesService', () => {
  let service: PokemonFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
