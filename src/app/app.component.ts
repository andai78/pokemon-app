import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  pokemons:Pokemon[] = [];

  constructor() {
    
  }

  ngOnInit(){
    this.pokemons = POKEMONS;
    console.log(this.pokemons)
  }
}
