import axios from "axios";
import { BASE_URL } from ".";

export async function getPokemons(limit: number, offset: number) {
  try {
    const response = axios.get(BASE_URL + "/pokemon", {
      params: {
        limit: 12,
        offset: offset,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
}
