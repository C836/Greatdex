import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from './global';

@Injectable({ providedIn: 'root' })

export class DataService {

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(`${BASE_URL}/pokemon?limit=10`);
  }
}
