import { types } from "../../global";
import { TypesConfig } from "../../types/pokemons";
import { PokeType } from "../PokeType/PokeType";
import * as S from "./Filters.styled";

export function Filters({
  options: { type },
  typeUpdate
}: {
  options: { type: keyof typeof TypesConfig };
  typeUpdate: (newType: keyof typeof TypesConfig) => void
}) {
  const onTypeFilterChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    const title: keyof typeof TypesConfig = target.title as unknown as keyof typeof TypesConfig;

    typeUpdate(title);
  };

  return (
    <S.Filters>
      <S.TypeSelector>
        <PokeType type={type} />

        <S.TypeOptions>
          {Object.keys(types).map((type, index) => {
            return (
              //@ts-ignore
              <PokeType type={type} key={index} onclick={onTypeFilterChange} />
            );
          })}
        </S.TypeOptions>
      </S.TypeSelector>
    </S.Filters>
  );
}
