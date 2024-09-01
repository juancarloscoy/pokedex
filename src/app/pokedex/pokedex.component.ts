import { Component } from '@angular/core';
import { PokeAPIService } from './services/pokeapi.service';
import { PokemonInterface } from './interface/pokemon.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  selectedPokemon!: PokemonInterface;
  searchPokemon = '';
  showPokemon = true;
  pokemonNotFound = '';

  constructor(
    private pokeAPIService: PokeAPIService
  ) { }

  clearSearch() {
    this.searchPokemon = '';
    this.showPokemon = true;
  }

  getPokemon() {
    this.showPokemon = true;
    this.pokeAPIService.getPokemon(this.searchPokemon).subscribe({
      next: value => {
        this.selectedPokemon = value;
      },
      error: error => {
        if (error.error && error.status === 404) {
          this.showPokemon = false;
          this.pokemonNotFound = this.searchPokemon;
        }
      }
    });
  }

}
