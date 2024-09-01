import { Component, Input } from '@angular/core';
import { PokemonInterface } from '../interface/pokemon.interface';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrl: './poke-description.component.scss'
})
export class PokeDescriptionComponent {
  @Input() selectedPokemon!: PokemonInterface;

  convertWeightOrHeight(value: number) {
    return (value / 10);
  }

}

