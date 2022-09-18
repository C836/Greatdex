import * as S from "./Card.styled";
import background from "./../../assets/img/poke_background.svg";
import placeholder from "./../../assets/img/placeholder.png";
import { Tag } from "../Tag/Tag";
import { CardConfig } from "../../types";
import { typesColors } from "../../global";
import { useState } from "react";

export function Card({ id, name, sprite, type, types }: CardConfig) {
  const [imageLoad, setImageLoad] = useState(false);

  const onImageLoad = () => {
    setImageLoad(true);
  }

  return (
    <S.Card type={type}>
      <S.Id pokeId={id} />

      <S.SpriteWrapper type={type} background={background}>
        <S.Sprite disabled={!imageLoad} src={sprite} alt={name} onLoad={onImageLoad} />
        {!imageLoad && <S.Sprite src={placeholder} />}
      </S.SpriteWrapper>

      <S.Specie>{name}</S.Specie>

      <S.PokemonTypes>
        {types.map((item, index) => {
          const type = item.type.name;
          const color = typesColors[type];

          return <Tag text={type} title={type} color={color} key={index} />;
        })}
      </S.PokemonTypes>
    </S.Card>
  );
}

export function Ghost() {
  return (
    <S.Ghost>
      <S.Id />

      <S.SpriteWrapper background={background}>
        <S.Sprite src={placeholder} />
      </S.SpriteWrapper>

      <S.Specie>Loading...</S.Specie>

      <S.PokemonTypes>
        <Tag text={"⠀⠀⠀⠀"} color={"#bbb"} title={"⠀"} />
        <Tag text={"⠀⠀⠀⠀"} color={"#bbb"} title={"⠀"} />
      </S.PokemonTypes>
    </S.Ghost>
  );
}
