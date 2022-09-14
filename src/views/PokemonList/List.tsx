import { useEffect, useState } from "react";
import * as S from "./List.styled";
import { Card } from "../../components/Card/Card";
import { getPokemonData, getPokemons } from "../../services";
import { PokemonConfig, TypesConfig } from "../../types/pokemons";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filters } from "../../components/Filters/Filters";
import { getFilteredPokemons } from "../../services/getPokemons";
import { getTypeId } from "../../utils/getTypeId";

export function List() {
  const [pokemons, setPokemons] = useState<{
    list: PokemonConfig[];
    page: number;
    options: {
      type: keyof typeof TypesConfig;
    };
  }>({ list: [], page: 0, options: { type: "any" } });

  const offsetUpdate = (page: number) => {
    setPokemons({ ...pokemons, page: page });
  };

  const listUpdate = () => {
    setPokemons({ ...pokemons, list: [] });

    const offset = pokemons.page * 12;

    getPokemons(12, offset).then((responseList) => {
      if (responseList) {
        getListData(responseList);
      }
    });
  };

  const filteredListUpdate = () => {
    setPokemons({ ...pokemons, list: [] });

    const typeId = getTypeId(pokemons.options.type);

    const options = {
      type: typeId
    }

    getFilteredPokemons(options).then((responseList) => {
      if (responseList) {
        getListData(responseList, true);
      }
    });
  }

  const typeUpdate = (newType: keyof typeof TypesConfig) => {
    setPokemons({ ...pokemons, options: { type: newType } });
  };

  const getListData = (list: any, filtered?: boolean) => {
    const unorderedList: any[] = [];

    list?.map((pokemon: any) => {
      const name = filtered ? pokemon.pokemon.name : pokemon.name;

      getPokemonData(name).then((pokemonData) => {
        if (pokemonData) {
          unorderedList.push(pokemonData.data);

          if (unorderedList.length === list.length) {
            setPokemons({
              ...pokemons,
              list: unorderedList.sort((a, b) => {
                return a.id - b.id;
              }),
            });
          }
        }
      });
    });
  };

  useEffect(listUpdate, [pokemons.page]);
  useEffect(filteredListUpdate, [pokemons.options.type])

  return (
    <S.List>
      <Filters options={pokemons.options} typeUpdate={typeUpdate} />
      <Pagination page={pokemons.page} update={offsetUpdate} />
      <S.Results>
        {pokemons.list?.map((card, index) => {
          const { id, name, sprites, types } = card;

          return (
            <Card
              id={id}
              name={name}
              sprites={sprites}
              type={types[0].type.name}
              types={types}
              key={index}
            />
          );
        })}
      </S.Results>
      <Pagination page={pokemons.page} update={offsetUpdate} />
    </S.List>
  );
}
