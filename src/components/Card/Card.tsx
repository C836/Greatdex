import * as S from "./Card.styled";
import background from "./../../assets/img/poke_background.svg";
import { PokeType } from "../PokeType/PokeType";
import { CardConfig } from "../../types";

export function Card({ id, name, sprite, type, types }: CardConfig) {
  return (
    <S.Card type={type}>
      <S.Id pokeId={id} />

      <S.SpriteWrapper type={type} background={background}>
        <S.Sprite src={sprite} alt={name} />
      </S.SpriteWrapper>

      <S.Specie>{name}</S.Specie>

      <S.PokemonTypes>
        {types.map((item, index) => {
          const type = item.type.name;

          return <PokeType type={type} key={index} />;
        })}
      </S.PokemonTypes>
    </S.Card>
  );
}
