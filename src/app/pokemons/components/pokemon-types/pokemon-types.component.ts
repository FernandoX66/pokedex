import { Component, Input } from '@angular/core';
import { PokemonType } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.scss'],
})
export class PokemonTypesComponent {
  @Input() types: PokemonType[] = [];

  constructor() {}
}
