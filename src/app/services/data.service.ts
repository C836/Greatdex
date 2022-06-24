import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from './global';

@Injectable({ providedIn: 'root' })

export class DataService {

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.http.get(`${BASE_URL}/pokemon?limit=12&offset=${offset}`);
  }
  
  getPokemonData(name: string) {
    return this.http.get(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
  }
}
