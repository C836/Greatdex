export interface PokemonConfig {
  name: string;
  sprites: any;
  type: keyof typeof TypesConfig;
  types: {
    type: {
      name: keyof typeof TypesConfig;
    };
  }[];
}

export enum TypesConfig {
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
}
