import axios from "axios";
import { CurrentPokemonData } from "../models/types";

export const getOpponent = async (url: string): Promise<any> => {
  try {
    const response = await axios.get<CurrentPokemonData>(
      `https://pokeapi.co/api/v2/pokemon/${url}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
