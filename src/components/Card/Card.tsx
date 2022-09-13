import { PokemonConfig } from "../../types/pokemons";
import * as S from "./Card.styled";
import background from "./../../assets/img/poke_background.svg"
import { PokemonTypes } from "../PokemonTypes/PokemonTypes";

export function Card({id, name, sprites, type, types}: PokemonConfig) {

  return (
    <S.Card
      type={type}
    >
      <S.Id pokeId={id} />

      <S.SpriteWrapper
        type={type}
        background={background}
      >
        <S.Sprite
          src={sprites.versions["generation-v"]["black-white"].animated.front_default}
          alt={name}
        />
      </S.SpriteWrapper>

      <S.Specie>{name}</S.Specie>
      <PokemonTypes types={types} />
    </S.Card>
  );
}
