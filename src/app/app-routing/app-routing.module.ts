import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonRoutingModule } from '../pokemons/pokemon-routing.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    PokemonRoutingModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
