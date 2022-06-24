import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services';
import * as pokemon from 'pokemon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  details: any = {};
  pokemons_list: readonly string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.pokemons_list = pokemon.all();
  }

  hideDetails():void{
    this.details = {}
  }

  searchPokemon(input: any) {
    this.getPokemonData(input.value);
    input.value = ''
    input.blur();
  }

  getPokemonData(name: string | undefined) {
    if (name !== undefined) {
      this.dataService.getPokemonData(name).subscribe((pokemonData: any) => {
        this.details = pokemonData;
      });
    }
  }
}
