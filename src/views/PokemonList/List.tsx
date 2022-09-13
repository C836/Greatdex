import { useEffect, useState } from "react";
import * as S from "./List.styled";
import { Card } from "../../components/Card/Card";
import { getPokemonData, getPokemons } from "../../services";
import { PokemonConfig } from "../../types/pokemons";
import { Pagination } from "../../components/Pagination/Pagination";
import pokemon from "pokemon";

export function List() {
  const [pokemons, setPokemons] = useState<{
    list: PokemonConfig[];
    page: number;
  }>({ list: [], page: 0 });
  
  const offsetUpdate = (page:number) => {
    setPokemons({ ...pokemons, page: page})
  }

  const listUpdate = () => {
    setPokemons({ ...pokemons, list: [] });

    const offset = pokemons.page * 12;

    getPokemons(12, offset).then((responseList) => {
      if (responseList) {
        getListData(responseList);
      }
    });
  };

  const getListData = (list: any) => {
    const unorderedList: any[] = [];

    list?.map((pokemon: any) => {
      getPokemonData(pokemon.name).then((pokemonData) => {
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

  return (
    <>
      <S.List>
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
      </S.List>
      <Pagination page={pokemons.page} update={offsetUpdate} />
    </>
  );
}
