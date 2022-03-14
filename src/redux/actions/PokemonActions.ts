import axios from "axios";
import { AppDispatch } from "..";
import { PokemonDataResponse } from "../../models/types";
import { getOpponent } from "../../services/services";
import { GetPokemonsEnum } from "../types/pokemonsTypes";
import { baseUrl } from "../../constants";

export const PokemonActions = {
  getAllPokemons:
    (url = "?limit=300&offset=200") =>
    async (dispatch: AppDispatch) => {
      // dispatch(loading());
      const response = await axios.get<PokemonDataResponse>(`${baseUrl}${url}`);
      if (response.status === 200) {
        dispatch({
          type: GetPokemonsEnum.GET_ALL_POKEMONS,
          payload: response.data,
        });
      }
    },
  getOnePokemon: (name: string | number) => async (dispatch: AppDispatch) => {
    const response = await getOpponent(name);
    if (response.status === 200) {
      dispatch({
        type: GetPokemonsEnum.GET_ONE_POKEMON,
        payload: response.data,
      });
    }
  },
};
