import styled from "styled-components";
import { TypesConfig } from "../../types";

export const Card = styled.figure<{ type?: keyof typeof TypesConfig }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10%;
  font-family: "Righteous", cursive;
  color: white;
  background-color: #e3e3e3;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.1s;

  :hover {
    outline: 3px solid black;
  }
`;

export const SpriteWrapper = styled.figure<{
  type?: keyof typeof TypesConfig;
  background?: string;
}>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #00000020;
    mask: url(${(props) => props.background}) no-repeat center;
  }
`;

export const Sprite = styled.img<{ disabled?: boolean }>`
  display: ${(props) => props.disabled && "none"};
  object-fit: contain;
  image-rendering: pixelated;
  width: 100%;
  height: 100%;
`;

export const Specie = styled.h1`
  font-size: 1.6rem;
  text-transform: capitalize;
  margin-top: 15px;
  letter-spacing: 3px;
  font-weight: 500;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
`;

export const Id = styled.div<{ pokeId?: number }>`
  position: absolute;
  top: -10px;
  left: -10px;
  width: ${(props) => props.pokeId
    ? 55 + (String(props.pokeId).length - 1) * 10
    : 55 }px;
  height: 35px;
  background-color: #4f070f;
  clip-path: polygon(0 0, 100% 0%, 70% 100%, 0 100%);
  z-index: 1;

  ::before {
    content: "${(props) => props.pokeId}";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    left: 5px;
    width: ${(props) => props.pokeId
    ? 31 + (String(props.pokeId).length - 1) * 10
    : 31 }px;
    height: 25px;
    background-color: #c40b24;
    clip-path: polygon(0 0, 100% 0%, 73% 100%, 0 100%);
  }

  ::after {
    content: "";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    left: 5px;
    width: ${(props) => props.pokeId
    ? 41 + (String(props.pokeId).length - 1) * 10
    : 41 }px;
    height: 25px;
    background-color: #c40b24;
    clip-path: polygon(0 0, 100% 0%, 73% 100%, 0 100%);
    z-index: -1;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  z-index: 1;
  margin-top: 20px;
  column-gap: 15px;
`;

export const Ghost = styled(Card)`
  opacity: 0.3;
`
