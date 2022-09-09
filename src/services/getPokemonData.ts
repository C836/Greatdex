import axios, { AxiosResponse } from "axios";
import { BASE_URL } from ".";
import { PokemonConfig } from "../types/pokemons";

export async function getPokemonData(
  name: string
): Promise<AxiosResponse<PokemonConfig> | null> {
  try {
    const response = axios.get(BASE_URL + "/pokemon/" + name.toLowerCase());
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
