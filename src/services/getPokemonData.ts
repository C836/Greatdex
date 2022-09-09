import axios from "axios";
import { BASE_URL } from ".";

export async function getPokemonData(name: string) {
  try {
    const response = axios.get(BASE_URL + "/pokemon" + name.toLowerCase());

    return response;
  } catch (error) {
    return error;
  }
}
