import { TypesConfig } from "../../types/pokemons";
import * as S from "./PokemonTypes.styled";

export function PokemonTypes({ types }: { types: { type: { name: keyof typeof TypesConfig }}[]}) {
  return (
    <S.PokemonTypes>
      {types.map((item, index) => {
        const type = item.type.name

        return <S.Type type={type} key={index}>{type}</S.Type>;
      })}
    </S.PokemonTypes>
  );
}
