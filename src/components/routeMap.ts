import React from "react";
import Login from "./Login/Login";
import PokemonOfTheDay from "./MainPage/PokeOfTheDay/PokemonOfTheDay";
import PokemonFight from "./MainPage/PokeFight/PokeFight";
import Table from "./MainPage/Table/TableContainer";
import PokemonListItem from "./MainPage/Table/PokeListItem";
import BasicLineChart from "./MainPage/d3/ChartContainer";
import SwitchTables from "./MainPage/Table/SwitchTables";

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
  CHARTS = '/charts',
  WORKER = '/worker'
}

export const PublicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
];
export const PrivateRoutes = [
  { path: RouteNames.POKEMON_FIGHT, element: PokemonFight },
  { path: RouteNames.POKEMON_LIST, element: SwitchTables },
  { path: RouteNames.POKEMON_LIST_ITEM, element: PokemonListItem },
  { path: RouteNames.POKEMON_OF_THE_DAY, element: PokemonOfTheDay },
  { path: RouteNames.CHARTS, element: BasicLineChart },
  { path: RouteNames.LOGIN, element: Login },
];
