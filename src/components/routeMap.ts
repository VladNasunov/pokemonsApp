import React from "react";
import Login from "./Login/Login";
import PokemonOfTheDay from "./MainPage/Pokemons/PokemonOfTheDay";
import PokemonFight from "../components/MainPage/PokemonFight/PokemonFight";
import PokemonList from "./MainPage/PokemonsList/PokemonList";
import PokemonListItem from "./MainPage/PokemonsList/PokemonListItem";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  POKEMON_FIGHT = "/",
  POKEMON_LIST = "/pokemonlist",
  POKEMON_LIST_ITEM = "/pokemonlist/:id",
  POKEMON_OF_THE_DAY = "/pokemonoftheday",
}

export const PublicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
];
export const PrivateRoutes = [
  { path: RouteNames.POKEMON_FIGHT, element: PokemonFight },
  { path: RouteNames.POKEMON_LIST, element: PokemonList },
  { path: RouteNames.POKEMON_LIST_ITEM, element: PokemonListItem },
  { path: RouteNames.POKEMON_OF_THE_DAY, element: PokemonOfTheDay },
];
