import * as S from "./Search.styled";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import pokemon from "pokemon";
import { useEffect, useState } from "react";

interface listItem {
  id: number;
  name: string;
}

export function Search() {
  const [autocomplete, setList] = useState<listItem[]>([]);

  const pokemonList = pokemon.all();

  const searchPokemons = () => {
    const autocompleteList: listItem[] = [];

    pokemonList.map((name, index) => {
      autocompleteList.push({
        id: index,
        name: name,
      });
    });

    setList(autocompleteList);
  };

  useEffect(searchPokemons, []);

  return (
    <S.Search>
      <ReactSearchAutocomplete
        items={autocomplete}
        onSearch={searchPokemons}
        showNoResults={false}
        placeholder={"ex: Gardevoir"}
      />
    </S.Search>
  );
}
