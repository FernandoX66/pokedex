import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonBasic } from '../../interfaces/pokemons.interface';
import { PokemonFavoritesService } from '../../services/pokemon-favorites.service';
import { PokemonRequestsService } from '../../services/pokemon-requests.service';
import { getPokemonIndex } from '../../helpers/get-pokemon-index';

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
      .pipe(tap((pokemon: Pokemon) => (this.pokemon = pokemon)))
      .subscribe(
        (pokemon: Pokemon) => (this.pokemonIndex = getPokemonIndex(pokemon.id))
      );
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
    private _snackbar: MatSnackBar,
    private _router: Router
  ) {}

  addFavoritePokemon(event: MouseEvent): void {
    event.stopPropagation();
    const pokemonBasicToAdd = {
      name: this.pokemon.name,
      url: `https://pokeapi.co/api/v2/pokemon/${this.pokemon.id}/`,
    };
    const formattedName =
      pokemonBasicToAdd.name.charAt(0).toUpperCase() +
      pokemonBasicToAdd.name.slice(1, pokemonBasicToAdd.name.length);

    const addedSuccessfully =
      this._pokemonFavoritesService.addFavoritePokemon(pokemonBasicToAdd);

    if (addedSuccessfully) {
      this._snackbar.openFromComponent(CustomSnackbarComponent, {
        data: {
          text: `${formattedName} was successfully added to your favorites`,
          title: 'Success',
          type: 'success',
        },
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: 'success-snackbar',
        duration: 3000,
      });
    } else {
      this._snackbar.openFromComponent(CustomSnackbarComponent, {
        data: {
          text: `You already have ${formattedName} in your favorites`,
          title: 'Error',
          type: 'error',
        },
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: 'error-snackbar',
        duration: 3000,
      });
    }
  }

  removeFavoritePokemon(event: MouseEvent): void {
    event.stopPropagation();
    const pokemonToRemove = this.pokemon.name;
    const formattedName =
      pokemonToRemove.charAt(0).toUpperCase() +
      pokemonToRemove.slice(1, pokemonToRemove.length);

    this._pokemonFavoritesService
      .removeFavoritePokemon(pokemonToRemove)
      .subscribe(() => {
        this._snackbar.openFromComponent(CustomSnackbarComponent, {
          data: {
            text: `${formattedName} was successfully removed from your favorites`,
            title: 'Success',
            type: 'success',
          },
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: 'success-snackbar',
          duration: 3000,
        });
      });
  }

  showPokemonDetails(): void {
    this._router.navigate(['home/pokemons', this.pokemon.id]);
  }
}
