import axios from "axios";
import { BASE_URL } from ".";
import { getFilteredPokemonList } from "../utils/getFilteredPokemonLIst";

export async function getPokemons(offset: number, limit?: number) {
  try {
    const response = await axios.get(BASE_URL + "/pokemon", {
      params: {
        limit: limit ? limit : 1000,
        offset: offset,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getFilteredPokemons({ type }: { type?: number }) {
  try {
    const response = await axios.get(BASE_URL + "/type/" + String(type));

    return getFilteredPokemonList(response.data.pokemon);
  } catch (error) {
    console.error(error);
    return null;
  }
}
