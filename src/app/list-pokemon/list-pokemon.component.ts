import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pockemon';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PkmTypeColorPipe } from '../pkm-type-color.pipe';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemons:Pokemon[] = [];

  constructor(private route:Router) { }

  ngOnInit() {
    this.pokemons = POKEMONS;
    console.log(this.pokemons)
  }

  selectPokemon(pokemon:Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

}
