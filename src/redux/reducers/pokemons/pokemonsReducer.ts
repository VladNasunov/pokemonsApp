import { CurrentPokemonData, PokemonDataResponse } from "../../../models/types";
import {
  GetPokemonsEnum,
  PokemonActions,
  PokemonsState,
} from "../../types/pokemonsTypes";

export const initialState: PokemonsState = {
  allPokemons: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  } as PokemonDataResponse,
  onePokemon: {
    sprites: {
      front_default: "",
    },
  } as CurrentPokemonData,
  loading: false,
  error: false,
};
export default function pokemonsReducer(
  state = initialState,
  action: PokemonActions
): PokemonsState {
  switch (action.type) {
    case GetPokemonsEnum.GET_ALL_POKEMONS:
      return { ...state, allPokemons: action.payload, loading: false };
    case GetPokemonsEnum.GET_ONE_POKEMON:
      return { ...state, onePokemon: action.payload, loading: false };
    case GetPokemonsEnum.LOADING:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
}
