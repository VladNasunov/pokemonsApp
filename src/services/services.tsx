import axios from "axios";
import {
  CurrentPokemonData,
  PokemonResults,
} from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { JsonResponse } from "../models/tableTypes";
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

export const pokemonAPI = createApi({
  reducerPath: "pokemonAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints: (build) => ({
    getAllPokemons: build.query<PokemonResults[], string | void>({
      query: (_limit = "?limit=300&offset=200") => ({
        url: `pokemon${_limit}`,
      }),
      transformResponse: (rawResult: { results: PokemonResults[] }, meta) => {
        return rawResult.results;
      },
    }),
    getOnePokemon: build.query<CurrentPokemonData, string | number | void>({
      query: (name) => ({
        url: `pokemon/${name}`,
      }),
    }),
  }),
});

export const JsonAPI = createApi({
  reducerPath: "JsonAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    // getAllPokemons: build.query<PokemonResults[], string | void>({
    //   query: (_limit = "?limit=300&offset=200") => ({
    //     url: `pokemon${_limit}`,
    //   }),
    //   transformResponse: (rawResult: { results: PokemonResults[] }, meta) => {
    //     return rawResult.results;
    //   },
    // }),
    getComments: build.query<JsonResponse[], void>({
      query: () => ({
        url: `comments`,
      }),
    }),
  }),
});
