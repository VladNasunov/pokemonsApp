export const fetchPokemons = async (
  url: string = "?limit=300&offset=200"
): Promise<any> => {
  try {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon${url}`);
    const result = await request.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchRandomPokemon = (): Promise<any> => {
  const max: number = 300;
  const min: number = 1;
  const randomPokemonUrl = Math.round(Math.random() * (max - min) + min);
  return fetchPokemons(`/${randomPokemonUrl}`);
};

// export const getPokemonData = async (fetchData: Function, url?: string) => {
//   const data = await fetchData(`/${fetchData}`);
//   return data;
// };
