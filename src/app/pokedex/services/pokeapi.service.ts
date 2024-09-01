import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(pokemon:string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(`${this.apiUrl}/${pokemon}`);
  }
}