import styled from "styled-components";
import { types } from "../../global";
import { TypesConfig } from "../../types/pokemons";

export const PokemonTypes = styled.div`
  display: flex;
  z-index: 1;
`;

export const Type = styled.div<{ type: keyof typeof TypesConfig }>`
  line-height: 0;
  font: 600 .9rem "Segoe UI", sans-serif;
  padding: 3px 15px;
  text-transform: uppercase;
  border-radius: 25px;
  margin: 16px 10px 0 10px;
  position: relative;
  text-align: right;
  background-color: ${props => types[props.type]};

  ::before {
    background-color: inherit;
    filter: brightness(80%);
    z-index: -1;
    content: "⠀";
    position: absolute;

    border-radius: 25px;
    width: calc(100% + 5px);
    left: -2.5px;
    height: calc(100% + 5px);
    top: -2.5px;
  }
`;
