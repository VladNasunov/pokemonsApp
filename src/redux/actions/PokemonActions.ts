import axios from "axios";
import { AppDispatch } from "..";
import { PokemonDataResponse, CurrentPokemonData } from "../../models/types";
import { getOpponent } from "../../services/services";
import { GetPokemonsEnum } from "../types/pokemonsTypes";

const baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

export const PokemonActions = {
  getAllPokemons:
    (url = "?limit=300&offset=200") =>
    async (dispatch: AppDispatch) => {
      dispatch({ type: GetPokemonsEnum.LOADING, payload: true });
      const response = await axios.get<PokemonDataResponse>(`${baseUrl}${url}`);
      if (response.status === 200) {
        dispatch({
          type: GetPokemonsEnum.GET_ALL_POKEMONS,
          payload: response.data,
        });
      }
    },
  getOnePokemon: (name: string | number) => async (dispatch: AppDispatch) => {
    dispatch({ type: GetPokemonsEnum.LOADING, payload: true });
    const response = await axios.get<CurrentPokemonData>(`${baseUrl}/${name}`);
    if (response.status === 200) {
      dispatch({
        type: GetPokemonsEnum.GET_ONE_POKEMON,
        payload: response.data,
      });
    }
  },
};
