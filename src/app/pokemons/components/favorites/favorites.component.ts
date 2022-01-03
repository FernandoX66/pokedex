import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, grow } from 'src/app/shared/animations/animations';
import { PokemonBasic } from '../../interfaces/pokemons.interface';
import { PokemonFavoritesService } from '../../services/pokemon-favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  animations: [fadeIn, grow],
})
export class FavoritesComponent implements OnInit {
  currentTab: string = 'Favorites';
  pokemonsList: PokemonBasic[] = [];

  constructor(private pokemonFavoritesService: PokemonFavoritesService) {}

  ngOnInit(): void {
    this.pokemonsList = this.pokemonFavoritesService.pokemonsList;
  }
}
