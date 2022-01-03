import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { PokemonBasic } from '../interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonFavoritesService {
  private _pokemonsList: PokemonBasic[] = [];

  constructor(private _localStorageService: LocalStorageService) {
    this.getFavoritePokemons();
  }

  getFavoritePokemons(): void {
    const pokemonsList = this._localStorageService.getFavorites();

    if (pokemonsList) {
      this._pokemonsList = JSON.parse(pokemonsList);
    }
  }

  addFavoritePokemon(pokemonBasic: PokemonBasic): boolean {
    let isPokemonAdded = false;

    for (let pokemon of this._pokemonsList) {
      if (pokemon.name === pokemonBasic.name) {
        isPokemonAdded = true;
      }
    }

    if (!isPokemonAdded) {
      this._pokemonsList.push(pokemonBasic);
      this._localStorageService.saveFavorites(this._pokemonsList);
      return true;
    }

    return false;
  }

  removeFavoritePokemon(pokemonToRemove: string): void {
    for (let pokemon of this._pokemonsList) {
      if (pokemon.name === pokemonToRemove) {
        const indexToRemove = this._pokemonsList.indexOf(pokemon);

        this._pokemonsList.splice(indexToRemove, 1);
        this._localStorageService.saveFavorites(this._pokemonsList);
      }
    }
  }

  get pokemonsList(): PokemonBasic[] {
    return this._pokemonsList;
  }
}
