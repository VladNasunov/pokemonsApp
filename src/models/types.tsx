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
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}>;

export interface CurrentPokemonData {
  abilities: Array<PokemonAbility>;
  base_experience: number;
  forms: Array<any>;
  game_indices: Array<any>;
  height: number;
  held_item: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: PokemonAbility;
  sprites: PokemonSprites;
  stats: any;
  types: any;
  weight: number;
}
export type PokemonCardData = Readonly<{
  base_experience?: number;
  order?: number;
  height?: number;
  weight?: number;
}>;
