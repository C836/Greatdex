import axios from "axios";
import { BASE_URL } from ".";
import { PokemonNameConfig } from "../types";

export async function getPokemons({ offset, limit, type }: {
  offset: number;
  limit: number;
  type: number | null;
}) {

  if (type) {
    const URL = BASE_URL + "/type/" + String(type);

    const response = getFilteredPokemonList(URL);
    return response;
  } else {
    const URL = BASE_URL + "/pokemon";

    const options = {
      params: {
        limit: limit,
        offset: offset,
      }
    };

    const response = getPokemonList(URL, options);
    return response;
  }
}

async function getPokemonList(URL: string, options: any) {
  try {
    const response = await axios.get(URL, options);

    return response.data.results;
  } catch (error) {
    return null;
  }
}

async function getFilteredPokemonList(URL: string) {
  try {
    const nestedResponse: Array<{ pokemon: PokemonNameConfig }> = (
      await axios.get(URL)
    ).data.pokemon;

    const response = nestedResponse.map((item) => {
      return item.pokemon;
    });

    return response;
  } catch (error) {
    return null;
  }
}
