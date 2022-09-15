import * as S from "./Search.styled";
import { useEffect, useState } from "react";
import pokemon from "pokemon";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { SearchListConfig } from "../../types";

export function Search() {
  const [autocomplete, setList] = useState<Array<SearchListConfig>>([]);

  const pokemonList = pokemon.all();

  const searchPokemons = () => {
    const autocompleteList: Array<SearchListConfig> = [];

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
