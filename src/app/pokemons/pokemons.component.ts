import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.dataService
          .getPokemonData(result.name)
          .subscribe((pokemonData: any) => {
            console.log(pokemonData)
          });
      });
    });
  }
}
