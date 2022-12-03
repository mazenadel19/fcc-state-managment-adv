import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export default function usePokemon() {
  const { Pokemons } = useContext(PokemonContext);

  return Pokemons;
}
