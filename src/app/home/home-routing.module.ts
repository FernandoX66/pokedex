import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'pokemons',
        loadChildren: () =>
          import('../pokemons/pokemons.module').then((m) => m.PokemonsModule),
      },
      {
        path: 'items',
        loadChildren: () =>
          import('../items/items.module').then((m) => m.ItemsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
