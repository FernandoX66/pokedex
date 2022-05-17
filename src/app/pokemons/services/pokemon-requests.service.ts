import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Pokemons } from '../interfaces/pokemons.interface';

@Injectable()
export class PokemonRequestsService {
  constructor(private _http: HttpClient) {}

  getPokemons(url?: string): Observable<Pokemons> {
    if (url) {
      return this._http.get<Pokemons>(url);
    } else {
      return this._http.get<Pokemons>('https://pokeapi.co/api/v2/pokemon/');
    }
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(url);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
