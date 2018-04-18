import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemon';

@Injectable()
export class PokemonService {

  pokemons:Pokemon[] = [];

  constructor() { }

  getPokemons(){
      return POKEMONS;
  }

  getOnePokemon(id:number){
      let pokemon:Pokemon = null;
      for(let i = 0; i<POKEMONS.length; i++){
          if(POKEMONS[i].id == id){
            pokemon = POKEMONS[i]
          }
      }
      return pokemon;
  }

}
