export type PokemonResults = Readonly<{
  name: string;
  url: string;
}>;

export type PokemonDataResponse = Readonly<{
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonResults>;
}>;

export type PokemonAbility = Readonly<{
  ability: PokemonResults;
  is_hidden: boolean;
  slot: number;
}>;

export type PokemonSprites = Readonly<{
  front_default: string;
}>;

export type CurrentPokemonData = {
  abilities: Array<PokemonAbility>;
  base_experience: number;
  forms: Array<any>;
  height: number;
  id: number;
  moves: Array<PokemonInfoMoves>;
  name: string;
  // species: PokemonAbility;
  types: Array<PokemonInfoTypes>;
  sprites: PokemonSprites;
  weight: number;
}
// export type CurrentPokemonData = {
//   abilities: Array<PokemonAbility>;
//   base_experience: number;
//   forms: Array<any>;
//   game_indices: Array<any>;
//   height: number;
//   held_item: Array<any>;
//   id: number;
//   is_default: boolean;
//   location_area_encounters: string;
//   moves: Array<PokemonInfoMoves>;
//   name: string;
//   order: number;
//   past_types: Array<any>;
//   species: PokemonAbility;
//   sprites: PokemonSprites;
//   stats: any;
//   types: Array<PokemonInfoTypes>;
//   weight: number;
// }
export type PokemonInfoTypes = Readonly<{
  slot: number;
  type: PokemonResults
}>
export type PokemonInfoMoves = Readonly<{
  move: PokemonResults
}>
export type PokemonCardData = Readonly<{
  base_experience?: number;
  order?: number;
  height?: number;
  weight?: number;
}>;
