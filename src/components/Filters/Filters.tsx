import * as S from "./Filters.styled";
import { generationsColors, generationTitles, typesColors } from "../../global";
import { PokemonListOptionsConfig, TypesConfig } from "../../types";
import { Tag } from "../Tag/Tag";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { ActiveMenusConfig } from "../../types/views";
import { GenerationsConfig } from "../../types/utils";
import { Search } from "../Search/Search";

export function Filters({
  options: { type: selectedType, generation: selectedGeneration },
  optionsUpdate: { typeUpdate, generationUpdate },
}: {
  options: PokemonListOptionsConfig;
  optionsUpdate: {
    typeUpdate: (newType: keyof typeof TypesConfig) => void;
    generationUpdate: (newGen: keyof typeof GenerationsConfig) => void;
  };
}) {
  const [activeMenus, setActiveMenus] = useState<ActiveMenusConfig>({
    typeMenu: false,
    generationMenu: false,
  });

  const { typeMenu, generationMenu } = activeMenus;

  const typeMenuRef = useRef() as React.RefObject<HTMLDivElement>;
  const generationMenuRef = useRef() as React.RefObject<HTMLDivElement>;

  const onTypeFilterChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    const title: keyof typeof TypesConfig =
      target.title as unknown as keyof typeof TypesConfig;

    typeUpdate(title);
  };

  const onGenFilterChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    const title: keyof typeof GenerationsConfig =
      target.title as unknown as keyof typeof GenerationsConfig;

    generationUpdate(title);
  };

  const onTypeListClick = () => {
    if (typeMenu) {
      closeMenus();
    } else {
      setActiveMenus({ ...activeMenus, typeMenu: true });
    }
  };

  const onGenListClick = () => {
    if (generationMenu) {
      closeMenus();
    } else {
      setActiveMenus({ ...activeMenus, generationMenu: true });
    }
  };

  const closeMenus = () => {
    const closedMenusObj = Object.keys(activeMenus).reduce((menu, key) => {
      (menu as any)[key] = false;
      return menu;
    }, {} as ActiveMenusConfig);

    setActiveMenus(closedMenusObj);
  };

  const selectedMenuRef = activeMenus.typeMenu
    ? typeMenuRef
    : generationMenuRef;

  useOnClickOutside(selectedMenuRef, closeMenus);
  useEffect(closeMenus, [selectedType]);

  return (
    <S.Filters>
      <Search />

      <S.Right>
        <S.TypeSelector onClick={onTypeListClick} ref={typeMenuRef}>
          <Tag
            text={selectedType}
            title={selectedType}
            color={typesColors[selectedType]}
          />

          <S.TypeOptions active={typeMenu}>
            {(Object.keys(typesColors) as Array<keyof typeof TypesConfig>).map(
              (type, index) => {
                if (type !== selectedType) {
                  return (
                    <Tag
                      text={type}
                      title={type}
                      color={typesColors[type]}
                      onclick={onTypeFilterChange}
                      key={index}
                    />
                  );
                }
              }
            )}
          </S.TypeOptions>
        </S.TypeSelector>

        <S.TypeSelector onClick={onGenListClick} ref={generationMenuRef}>
          <Tag
            text={generationTitles[selectedGeneration]}
            title={selectedGeneration}
            color={generationsColors[selectedGeneration]}
          />

          <S.TypeOptions active={generationMenu}>
            {(
              Object.keys(generationsColors) as Array<
                keyof typeof GenerationsConfig
              >
            ).map((generation, index) => {
              if (generation !== selectedGeneration) {
                const text = generationTitles[generation];

                return (
                  <Tag
                    text={text}
                    title={generation}
                    color={generationsColors[generation]}
                    onclick={onGenFilterChange}
                    key={index}
                  />
                );
              }
            })}
          </S.TypeOptions>
        </S.TypeSelector>
      </S.Right>
    </S.Filters>
  );
}
