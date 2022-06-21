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
      console.log(response)
    });
  }
}
