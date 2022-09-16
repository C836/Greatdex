import { TypesConfig, PokemonTypesConfig, PokemonConfig } from ".";
import { GenerationsConfig } from "./utils";

export interface CardConfig {
  id: number;
  name: string;
  sprite: string;
  type: keyof typeof TypesConfig;
  types: Array<PokemonTypesConfig>;
}

export interface PokemonListConfig {
  list: Array<PokemonConfig>;
  page: number;
  options: PokemonListOptionsConfig;
}

export interface PokemonListOptionsConfig {
  type: keyof typeof TypesConfig;
  generation: keyof typeof GenerationsConfig;
}

export interface SearchListConfig {
  id: number;
  name: string;
}

export interface ActiveMenusConfig {
  typeMenu: boolean;
  generationMenu: boolean;
}
