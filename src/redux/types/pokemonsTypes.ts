import { CurrentPokemonData, PokemonDataResponse } from "../../models/types";

export enum GetPokemonsEnum {
  GET_ALL_POKEMONS = "GET_ALL_POKEMONS",
  GET_ONE_POKEMON = "GET_ONE_POKEMON",
}

export type getAllPokemonsAction = {
  type: GetPokemonsEnum.GET_ALL_POKEMONS;
  payload: PokemonDataResponse;
};
export type getOnePokemonAction = {
  type: GetPokemonsEnum.GET_ONE_POKEMON;
  payload: CurrentPokemonData;
};
export type PokemonsState = {
  loading: boolean;
  error: boolean;
  allPokemons: PokemonDataResponse;
  onePokemon: CurrentPokemonData;
};
export type PokemonActions = getAllPokemonsAction | getOnePokemonAction;
