import { Injectable } from '@angular/core';
import { PokemonBasic } from 'src/app/pokemons/interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveFavorites(pokemonsList: PokemonBasic[]): void {
    localStorage.setItem('favorites', JSON.stringify(pokemonsList));
  }

  getFavorites(): string | null {
    return localStorage.getItem('favorites');
  }
}
