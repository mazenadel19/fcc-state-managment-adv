import { useContext, useMemo } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export default function usePokemon() {
  const { Pokemons, Search, dispatch } = useContext(PokemonContext);

  const filteredPokemon = useMemo(
    () => Pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(Search.toLowerCase())),
    [Pokemons, Search]
  );

  const sortedPokemon = useMemo(
    () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
    [filteredPokemon]
  );

  return { Pokemons: sortedPokemon, Search, dispatch };
}
