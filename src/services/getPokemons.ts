import axios from "axios";
import { BASE_URL } from ".";

export async function getPokemons(limit: number, offset: number) {
  try {
    const response = await axios.get(BASE_URL + "/pokemon", {
      params: {
        limit: 12,
        offset: offset,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}
