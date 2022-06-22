import { Component } from '@angular/core';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  details:any = []

  constructor(private dataService: DataService) {}

  getPokemonData(name: any) {
    if(name !== null){
    this.dataService
      .getPokemonData(name.value)
      .subscribe((pokemonData: any) => {
        this.details=(pokemonData)
        console.log(pokemonData)
      });
    }
  }
}
