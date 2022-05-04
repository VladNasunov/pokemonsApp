import { SortingRule } from "react-table";

export const usePokemonCardData = () => true;

export const randomPokemon = (): number =>
  Math.round(Math.random() * (300 - 1) + 1);

export const sortFunction = <T>(
  sortBy: SortingRule<T>,
  data: T[]
): T[] =>
  [...data].sort((a, b) => {
    if (!sortBy) return 0;
    const { id, desc } = sortBy;
    const aValue = a[id as keyof T];
    const bValue = b[id as keyof T];
    return (aValue > bValue ? -1 : 1) * (desc ? 1 : -1);
  });
