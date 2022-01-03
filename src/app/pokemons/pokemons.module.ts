import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonRequestsService } from './services/pokemon-requests.service';
import { PokemonTypesComponent } from './components/pokemon-types/pokemon-types.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SharedModule } from '../shared/shared.module';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent,
    PokemonTypesComponent,
    FavoritesComponent,
  ],
  providers: [PokemonRequestsService],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    SharedModule,
  ],
})
export class PokemonsModule {}
