import * as S from "./Filters.styled";
import { types } from "../../global";
import { PokemonListOptionsConfig, TypesConfig } from "../../types";
import { PokeType } from "../PokeType/PokeType";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { ActiveMenusConfig } from "../../types/views";

export function Filters({ options: { type: selectedType }, typeUpdate }: {
  options: PokemonListOptionsConfig;
  typeUpdate: (newType: keyof typeof TypesConfig) => void;
}) {
  const [ activeMenus, setActiveMenus ] = useState<ActiveMenusConfig>({
    typeMenu: false
  });

  const { typeMenu } = activeMenus;

  const typeMenuRef = useRef() as React.RefObject<HTMLDivElement>

  const onTypeFilterChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const title: keyof typeof TypesConfig = target.title as unknown as keyof typeof TypesConfig;

    typeUpdate(title);
  };

  const onTypeListClick = () => {
    if (typeMenu) {
      closeMenus()
    } else {
      setActiveMenus({...activeMenus,
        typeMenu: true
      });
    }
  };

  const closeMenus = () => {
    const closedMenusObj = Object.keys(activeMenus).reduce((menu, key) => {
      (menu as any)[key] = false;
      return menu;
    }, {} as ActiveMenusConfig);

    setActiveMenus(closedMenusObj)
  };

  useOnClickOutside(typeMenuRef, closeMenus)
  useEffect(closeMenus, [selectedType])

  return (
    <S.Filters>
      <S.TypeSelector onClick={onTypeListClick} ref={typeMenuRef}>
        <PokeType type={selectedType} />

        <S.TypeOptions active={typeMenu}>
          {Object.keys(types).map((type, index) => {
            if(type !== selectedType) {
              return (
                <PokeType
                  //@ts-ignore
                  type={type}
                  onclick={onTypeFilterChange}
                  key={index}
                />
              );
            }
          })}
        </S.TypeOptions>
      </S.TypeSelector>
    </S.Filters>
  );
}
