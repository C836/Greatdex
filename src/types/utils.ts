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

export enum GenerationsConfig {
  "any",
  "generation-i" = "Kanto - I",
  "generation-ii" = "Johto - II",
  "generation-iii" = "Hoenn - III",
  "generation-iv" = "Sinnoh - IV",
  "generation-v" = "Unova - V",
  "generation-vi" = "Kalos - VI",
  "generation-vii" = "Alola - VII",
  "generation-viii" = "Galar - VIII"
}

export interface SpritesConfig {
  "generation-i": {
    yellow: { front_default: string };
  };
  "generation-ii": {
    crystal: { front_default: string };
  };
  "generation-iii": {
    emerald: { front_default: string };
  };
  "generation-iv": {
    platinum: { front_default: string };
  };
  "generation-v": {
    "black-white": { front_default: string };
  };
  "generation-vi": {
    "x-y": { front_default: string };
  };
  "generation-vii": {
    "ultra-sun-ultra-moon": { front_default: string };
  };
}
