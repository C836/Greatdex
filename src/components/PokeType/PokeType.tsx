import * as S from "./PokeType.styled";
import { TypesConfig } from "./../../types/pokemons"

export function PokeType({type, onclick}:{type: keyof typeof TypesConfig, onclick?: React.MouseEventHandler<HTMLDivElement>}) {
  return (
    <S.Type type={type} title={type} onClick={onclick}>
      {type}
    </S.Type>
  );
}
