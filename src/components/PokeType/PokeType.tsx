import * as S from "./PokeType.styled";
import { TypesConfig } from "./../../types/pokemons"

export function PokeType({type}:{type: keyof typeof TypesConfig}) {
  return (
    <S.Type type={type}>
      {type}
    </S.Type>
  );
}
