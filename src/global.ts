import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const types = {
  normal: "rgb(168, 167, 122)",
  fire: "rgb(238, 129, 48)",
  water: "rgb(99, 144, 240)",
  electric: "rgb(247, 208, 44)",
  grass: "rgb(122, 199, 76)",
  ice: "rgb(150, 217, 214)",
  fighting: "rgb(194, 46, 40)",
  poison: "rgb(163, 62, 161)",
  ground: "rgb(226, 191, 101)",
  flying: "rgb(169, 143, 243)",
  psychic: "rgb(249, 85, 135)",
  bug: "rgb(166, 185, 26)",
  rock: "rgb(182, 161, 54)",
  ghost: "rgb(115, 87, 151)",
  dragon: "rgb(111, 53, 252)",
  dark: "rgb(112, 87, 70)",
  steel: "rgb(183, 183, 206)",
  fairy: "rgb(214, 133, 173)",
};
