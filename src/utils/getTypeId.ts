import { TypesConfig } from "../types/pokemons";
import { types } from "../global";

export function getTypeId(type: keyof typeof TypesConfig) {
  const typeList = Object.keys(types);

  const typeIndex = typeList.indexOf(type);

  return typeIndex;
}
