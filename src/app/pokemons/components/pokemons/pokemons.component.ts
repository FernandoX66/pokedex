import { Component, OnInit } from '@angular/core';
import { fadeIn, grow, slideDown } from 'src/app/shared/animations/animations';
import { MatTabChangeEvent } from '../../interfaces/mat-tab-change-event.interface';
import { PokemonBasic, Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonRequestsService } from '../../services/pokemon-requests.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  animations: [grow, fadeIn, slideDown],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemons = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };
  isLoadingPokemons: boolean = true;
  currentTab: string = 'All';

  constructor(private _pokemonRequestsService: PokemonRequestsService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(url?: string): void {
    this.isLoadingPokemons = true;

    this._pokemonRequestsService.getPokemons(url).subscribe(
      (pokemons: Pokemons) => {
        this.pokemons = pokemons;
      },
      (error) => console.log(error),
      () => (this.isLoadingPokemons = false)
    );
  }
}
