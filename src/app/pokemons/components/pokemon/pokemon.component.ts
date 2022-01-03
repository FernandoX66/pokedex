import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonBasic } from '../../interfaces/pokemons.interface';
import { PokemonFavoritesService } from '../../services/pokemon-favorites.service';
import { PokemonRequestsService } from '../../services/pokemon-requests.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  @Input() currentTab: string = 'All';
  @Input() set pokemonBasic(pokemonBasic: PokemonBasic) {
    this._pokemonRequestsService
      .getPokemon(pokemonBasic.url)
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
        if (this.pokemon.id < 10) {
          this.pokemonIndex = '00';
        } else if (this.pokemon.id < 100) {
          this.pokemonIndex = '0';
        } else {
          this.pokemonIndex = '';
        }
      });
  }
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
  pokemonIndex: string = '';

  constructor(
    private _pokemonRequestsService: PokemonRequestsService,
    private _pokemonFavoritesService: PokemonFavoritesService,
    private _snackbar: MatSnackBar
  ) {}

  addFavoritePokemon(): void {
    const pokemonBasicToAdd = {
      name: this.pokemon.name,
      url: `https://pokeapi.co/api/v2/pokemon/${this.pokemon.id}/`,
    };

    const addedSuccessfully =
      this._pokemonFavoritesService.addFavoritePokemon(pokemonBasicToAdd);

    if (addedSuccessfully) {
      this._snackbar.openFromComponent(CustomSnackbarComponent, {
        data: { name: pokemonBasicToAdd.name, type: 'success' },
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: 'success-snackbar',
        duration: 3000,
      });
    } else {
      this._snackbar.openFromComponent(CustomSnackbarComponent, {
        data: { name: pokemonBasicToAdd.name, type: 'error' },
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: 'error-snackbar',
        duration: 3000,
      });
    }
  }

  removeFavoritePokemon(): void {
    const pokemonToRemove = this.pokemon.name;

    this._pokemonFavoritesService.removeFavoritePokemon(pokemonToRemove);
  }
}