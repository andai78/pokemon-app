import { Component, OnInit } from '@angular/core';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor() {
    
  }

  ngOnInit(){
    
  }
}
