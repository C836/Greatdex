import * as S from "./List.styled";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getPokemonData, getPokemons } from "../../services";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filters } from "../../components/Filters/Filters";
import { getTypeId } from "../../utils/getTypeId";
import { PokemonListConfig, PokemonNameConfig, TypesConfig } from "../../types";
import { GenerationsConfig } from "../../types/utils";
import { checkGenerationId } from "../../utils/checkGenerationId";
import { getGenerationRange } from "../../utils/getGenerationRange";

export function List() {
  const [pokemons, setPokemons] = useState<PokemonListConfig>({
    list: [],
    page: 0,
    options: { type: "any", generation: "any" },
  });

  const { list, page, options } = pokemons;
  const { type, generation } = options;

  const offsetUpdate = (page: number) => {
    setPokemons({ ...pokemons, page: page });
  };

  const listUpdate = () => {
    setPokemons({ ...pokemons, list: [] });

    const { start } = getGenerationRange(generation);

    const offset = start + page * 12;
    const limit = 12;

    const options = {
      offset: offset,
      limit: limit,
      type: getTypeId(type),
    };

    getPokemons(options).then((responseList) => {
      if (responseList) {
        getListData(responseList);
      }
    });
  };

  const typeUpdate = (newType: keyof typeof TypesConfig) => {
    setPokemons({ ...pokemons, options: { ...options, type: newType } });
  };

  const generationUpdate = (newGen: keyof typeof GenerationsConfig) => {
    setPokemons({ ...pokemons, options: { ...options, generation: newGen } });
  };

  const optionsUpdate = {
    typeUpdate: typeUpdate,
    generationUpdate: generationUpdate,
  };

  const getListData = (list: Array<PokemonNameConfig>) => {
    const orderedList: any[] = [];

    list?.map((pokemon) => {
      const name = pokemon.name;

      getPokemonData(name).then((pokemonData) => {
        if (pokemonData) {
          orderedList.push(pokemonData.data);

          if (orderedList.length === list.length) {
            setPokemons({
              ...pokemons,
              list: orderedList.sort((a, b) => {
                return a.id - b.id;
              }),
            });
          }
        }
      });
    });
  };

  useEffect(listUpdate, [page, options]);

  return (
    <S.List>
      <Filters options={options} optionsUpdate={optionsUpdate} />
      <Pagination page={page} update={offsetUpdate} />
      <S.Results>
        {list!.map((card, index) => {
          const {
            id,
            name,
            sprites: {
              other: {
                "official-artwork": { front_default },
              },
            },
            types,
            types: {
              0: {
                type: { name: type },
              },
            },
          } = card;

          if (card && checkGenerationId(id, generation)) {
            return (
              <Card
                id={id}
                name={name}
                sprite={front_default}
                type={type}
                types={types}
                key={index}
              />
            );
          }
        })}
      </S.Results>
      <Pagination page={page} update={offsetUpdate} />
    </S.List>
  );
}
