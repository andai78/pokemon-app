import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pockemon';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PkmTypeColorPipe } from '../pkm-type-color.pipe';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemons:Pokemon[] = [];

  constructor(private route:Router, private pokService:PokemonService) { }

  ngOnInit() {
      this.getPokemons();
  }

  selectPokemon(pokemon:Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

  getPokemons(){
    this.pokemons = this.pokService.getPokemons();
  }

}
