import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonRequestsService } from '../../services/pokemon-requests.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon = {
    id: 0,
    name: '',
    base_experience: 0,
    height: 0,
    is_default: false,
    order: 0,
    weight: 0,
    abilities: [],
    forms: [],
    game_indices: [],
    held_items: [],
    location_area_encounters: '',
    moves: [],
    past_types: [],
    sprites: {
      front_default: '',
      front_shiny: '',
      front_female: '',
      front_shiny_female: '',
      back_default: '',
      back_shiny: '',
      back_female: '',
      back_shiny_female: '',
    },
    species: {
      name: '',
      url: '',
    },
    stats: [],
    types: [],
  };

  constructor(
    private pokemonRequestsService: PokemonRequestsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) =>
          this.pokemonRequestsService.getPokemon(
            `https://pokeapi.co/api/v2/pokemon/${paramMap.get('id')}`
          )
        )
      )
      .subscribe((pokemon: Pokemon) => (this.pokemon = pokemon));
  }
}
