import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pockemon';
import { Route } from '@angular/router/src/config';
import { PkmTypeColorPipe } from '../pkm-type-color.pipe';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemons:Pokemon[] = null;
  pokemon:Pokemon = null;

  constructor(private route: ActivatedRoute, private router:Router, private pokService:PokemonService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokService.getOnePokemon(id);
  }

  goBack(): void{
    this.router.navigate(['/pokemons'])
  }


}
