import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  img {
    pointer-events: none;
  }
`;

export const typesColors = {
  any: "#bdbdbd",
  normal: "rgb(168, 167, 122)",
  fighting: "rgb(194, 46, 40)",
  flying: "rgb(169, 143, 243)",
  poison: "rgb(163, 62, 161)",
  ground: "rgb(226, 191, 101)",
  rock: "rgb(182, 161, 54)",
  bug: "rgb(166, 185, 26)",
  ghost: "rgb(115, 87, 151)",
  steel: "rgb(183, 183, 206)",
  fire: "rgb(238, 129, 48)",
  water: "rgb(99, 144, 240)",
  grass: "rgb(122, 199, 76)",
  electric: "rgb(247, 208, 44)",
  psychic: "rgb(249, 85, 135)",
  ice: "rgb(150, 217, 214)",
  dragon: "rgb(111, 53, 252)",
  dark: "rgb(112, 87, 70)",
  fairy: "rgb(214, 133, 173)",
};

export const generationsColors = {
  any: "#555",
  "generation-i": "rgba(128, 187, 29)",
  "generation-ii": "rgba(202, 198, 46)",
  "generation-iii": "rgba(103,193,171)",
  "generation-iv": "rgba(144,114,163)",
  "generation-v": "rgba(107,174,206)",
  "generation-vi": "rgba(203,11,79)",
  "generation-vii": "rgba(220,90,64)",
  "generation-viii": "rgba(172,55,158)",
};

export const generationTitles = {
  "any": "any",
  "generation-i": "Kanto - I",
  "generation-ii": "Johto - II",
  "generation-iii": "Hoenn - III",
  "generation-iv": "Sinnoh - IV",
  "generation-v": "Unova - V",
  "generation-vi": "Kalos - VI",
  "generation-vii": "Alola - VII",
  "generation-viii": "Galar - VIII",
};

export const generationsRange = {
  "any": [0, 905],
  "generation-i": [0, 151],
  "generation-ii": [152, 251],
  "generation-iii": [252, 386],
  "generation-iv": [387, 493],
  "generation-v": [494, 649],
  "generation-vi": [650, 721],
  "generation-vii": [722, 809],
  "generation-viii": [810, 905],
};
