import { TypesConfig } from "./utils";

export interface PokemonNameConfig {
  name: string;
}

export interface TypeFilteredPokemonConfig {
  pokemon: Array<PokemonConfig>;
}

export interface PokemonConfig {
  id: number;
  name: string;
  sprites: PokemonSpritesConfig;
  types: Array<PokemonTypesConfig>;
}

export interface PokemonSpritesConfig {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface PokemonTypesConfig {
  type: {
    name: keyof typeof TypesConfig;
  };
}
