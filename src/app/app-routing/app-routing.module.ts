import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

// routes
const appRoutes: Routes = [
	{ path: 'pokemons', component: ListPokemonComponent },
	{ path: 'pokemon/:id', component: DetailPokemonComponent },
	{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
