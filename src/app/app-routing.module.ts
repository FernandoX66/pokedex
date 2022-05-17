import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'pokemons',
        data: {
          pageTitle: 'Pokemons',
        },
        loadChildren: () =>
          import('./pokemons/pokemons.module').then((m) => m.PokemonsModule),
      },
      {
        path: 'items',
        data: {
          pageTitle: 'Items',
        },
        loadChildren: () =>
          import('./items/items.module').then((m) => m.ItemsModule),
      },
      {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
