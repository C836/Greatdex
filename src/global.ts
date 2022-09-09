import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const types = {
  normal: "rgb(168, 167, 122, .4)",
  fire: "rgb(238, 129, 48, .4)",
  water: "rgb(99, 144, 240, .4)",
  electric: "rgb(247, 208, 44, .4)",
  grass: "rgb(122, 199, 76, .4)",
  ice: "rgb(150, 217, 214, .4)",
  fighting: "rgb(194, 46, 40, .4)",
  poison: "rgb(163, 62, 161, .4)",
  ground: "rgb(226, 191, 101, .4)",
  flying: "rgb(169, 143, 243, .4)",
  psychic: "rgb(249, 85, 135, .4)",
  bug: "rgb(166, 185, 26, .4)",
  rock: "rgb(182, 161, 54, .4)",
  ghost: "rgb(115, 87, 151, .4)",
  dragon: "rgb(111, 53, 252, .4)",
  dark: "rgb(112, 87, 70, .4)",
  steel: "rgb(183, 183, 206, .4)",
  fairy: "rgb(214, 133, 173, .4)",
};
