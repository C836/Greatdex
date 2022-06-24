import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 0;
  details: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  showDetails(pokemon:any){
    this.details = pokemon
  }

  hideDetails():void{
    this.details = {}
  }

  getPokemons() {
    this.pokemons = [];

    this.dataService
      .getPokemons(12, this.page * 12)
      .subscribe((response: any) => {
        response.results.map((result: { name: string }) => {
          this.getPokemonData(result);
        });
      });
  }

  getPokemonData(result: any) {
    this.dataService
      .getPokemonData(result.name)
      .subscribe((pokemonData: any) => {
        this.pokemons.push(pokemonData);
      });
  }

  previous() {
    if (this.page > 0) {
      this.page--;
      this.getPokemons();
    }
  }

  next() {
    this.page++;
    this.getPokemons();
  }
}
