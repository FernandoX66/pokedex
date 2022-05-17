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
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { TooltipModule } from '../theme/tooltip/tooltip.module';
import { ProgressBarModule } from '../theme/progress-bar/progress-bar.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const declarations = [
  PokemonsComponent,
  PokemonComponent,
  PokemonTypesComponent,
  FavoritesComponent,
  PokemonDetailsComponent,
];

const imports = [
  CommonModule,
  PokemonsRoutingModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatTabsModule,
  MatSnackBarModule,
  SharedModule,
  TooltipModule,
  ProgressBarModule,
  MatButtonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  providers: [PokemonRequestsService],
})
export class PokemonsModule {}
