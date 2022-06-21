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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemons = []

    this.dataService
      .getPokemons(10, Number(String(this.page) + '0'))
      .subscribe((response: any) => {
        response.results.map((result: { name: string }) => {
          this.dataService
            .getPokemonData(result.name)
            .subscribe((pokemonData: any) => {
              this.pokemons.push(pokemonData);
            });
        });
      });
  }

  previous() {
    this.page--;

    console.log(this.page + 0);

    this.getPokemons();
  }

  next() {
    this.page++;

    console.log(this.page + 0);

    this.getPokemons();
  }
}
