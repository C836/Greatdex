import * as S from "./List.styled";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getPokemonData, getPokemons } from "../../services";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filters } from "../../components/Filters/Filters";
import { getFilteredPokemons } from "../../services/getPokemons";
import { getTypeId } from "../../utils/getTypeId";
import { PokemonListConfig, PokemonNameConfig, TypesConfig } from "../../types";

export function List() {
  const [pokemons, setPokemons] = useState<PokemonListConfig>({
    list: [],
    page: 0,
    options: { type: "any" },
  });

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
      type: typeId,
    };

    getFilteredPokemons(options).then((responseList) => {
      if (responseList) {
        getListData(responseList);
      }
    });
  };

  const typeUpdate = (newType: keyof typeof TypesConfig) => {
    setPokemons({ ...pokemons, options: { type: newType } });
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

  useEffect(listUpdate, [pokemons.page]);
  useEffect(filteredListUpdate, [pokemons.options.type]);

  return (
    <S.List>
      <Filters options={pokemons.options} typeUpdate={typeUpdate} />
      <Pagination page={pokemons.page} update={offsetUpdate} />
      <S.Results>
        {pokemons.list!.map((card, index) => {
          const {
            id,
            name,
            sprites: { other: { "official-artwork": { front_default }}},
            types,
            types: { 0: { type: { name: type }}},
          } = card;

          if (card)
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
        })}
      </S.Results>
      <Pagination page={pokemons.page} update={offsetUpdate} />
    </S.List>
  );
}
