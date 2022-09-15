import * as S from "./Filters.styled";
import { types } from "../../global";
import { PokemonListOptionsConfig, TypesConfig } from "../../types";
import { PokeType } from "../PokeType/PokeType";

export function Filters({ options: { type }, typeUpdate }: {
  options: PokemonListOptionsConfig;
  typeUpdate: (newType: keyof typeof TypesConfig) => void;
}) {
  const onTypeFilterChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
              <PokeType
                //@ts-ignore
                type={type}
                onclick={onTypeFilterChange}
                key={index}
              />
            );
          })}
        </S.TypeOptions>
      </S.TypeSelector>
    </S.Filters>
  );
}
