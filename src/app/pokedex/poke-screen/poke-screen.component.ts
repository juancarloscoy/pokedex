import { Component, Input} from '@angular/core';
import { PokemonInterface } from '../interface/pokemon.interface';

@Component({
  selector: 'app-poke-screen',
  templateUrl: './poke-screen.component.html',
  styleUrl: './poke-screen.component.scss'
})
export class PokeScreenComponent {

  @Input() selectedPokemon!: PokemonInterface;

}
