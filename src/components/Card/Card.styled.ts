import styled from "styled-components";

import { types } from "../../global";
import { TypesConfig } from "../../types/pokemons";

export const Card = styled.figure<{ type: keyof typeof TypesConfig }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 10%;
  font-family: "Righteous", cursive;
  color: white;
  background-color: ${(props) => types[props.type]};
`;

export const SpriteWrapper = styled.figure<{ type: keyof typeof TypesConfig, background: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  ::before {
    filter: saturate(1);
    opacity: 1;
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${(props) => types[props.type]};
    mask: url(${(props) => props.background}) no-repeat center;
  }
`;

export const Sprite = styled.img`
  object-fit: contain;
  image-rendering: pixelated;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.4));
`;

export const Specie = styled.h1`
  margin-top: 20px;
  font-size: 1.6rem;
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 500;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
`;
