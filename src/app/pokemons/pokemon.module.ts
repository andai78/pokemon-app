import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PkmTypeColorPipe } from './pkm-type-color.pipe';

import { PokemonService } from './pokemon.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PkmTypeColorPipe
	],
	providers: [PokemonService]
})
export class PokemonsModule { }