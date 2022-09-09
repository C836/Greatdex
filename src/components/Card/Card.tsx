import { PokemonConfig } from "../../types/pokemons";
import * as S from "./Card.styled";
import background from "./../../assets/img/poke_background.svg"

export function Card({name, sprites, type}: PokemonConfig) {

  return (
    <S.Card
      type={type}
    >
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
    </S.Card>
  );
}
