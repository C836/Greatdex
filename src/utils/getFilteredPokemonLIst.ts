import { PokemonNameConfig } from "../types";

export function getFilteredPokemonList(pokemon: Array<{pokemon: PokemonNameConfig}>): Array<PokemonNameConfig> {
  return pokemon.map((item) => {
    return item.pokemon;
  });
}
