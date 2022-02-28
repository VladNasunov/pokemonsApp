export const usePokemonCardData = () => true;

export const randomPokemon = (): number =>
  Math.round(Math.random() * (300 - 1) + 1);
