export interface PokemonConfig {
  id: number;
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
  "any",
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
