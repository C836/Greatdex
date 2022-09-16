import { PokemonConfig, PokemonListOptionsConfig } from "../types";
import { getGenerationRange } from "./getGenerationRange";

export function checkPageLimit(
  currentList: PokemonConfig[],
  { type, generation }: PokemonListOptionsConfig
) {

  if (currentList.length) {
    const { end } = getGenerationRange(generation);
    const lastPokemonId = currentList[11].id;

    if (type !== "any") {
      return true;
    } else if (lastPokemonId <= end) {
      return false;
    } else {
      return true;
    }
  } else {
    return true
  }
}
