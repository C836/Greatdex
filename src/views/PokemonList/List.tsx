import { useEffect, useState } from "react";
import * as S from "./List.styled";
import { Card } from "../../components/Card/Card";
import { getPokemonData, getPokemons } from "../../services";
import { PokemonConfig } from "../../types/pokemons";

export function List() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const listUpdate = () => {
    setPokemons([]);

    getPokemons(12, 0).then((responseList) => {
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
            setPokemons(
              unorderedList.sort((a, b) => {
                return a.id - b.id;
              })
            );
          }
        }
      });
    });
  };

  useEffect(listUpdate, []);

  return (
    <S.List>
      {pokemons?.map((card, index) => {
        const { name, sprites, types } = card;
        return (
          <Card
            name={name}
            sprites={sprites}
            type={types[0].type.name}
            key={index}
          />
        );
      })}
    </S.List>
  );
}
