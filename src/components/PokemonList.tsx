import { useEffect } from 'react';
import { useHttp } from '../hooks/useHttp';
import usePokemon from '../hooks/usePokemon';
import { Pokemon } from '../typescript/interfaces';
import PokemonItem from './PokemonItem';

export default function PokemonList() {
  const { Pokemons, dispatch } = usePokemon();
  const data = useHttp({ url: '/pokemon.json' }) as Pokemon[];
  // const { data } = useQuery<Pokemon[]>(
  //   ['Pokemon'],
  //   () => fetch('/pokemon.json').then((res) => res.json()),
  //   {
  //     initialData: []
  //   }
  // );[]
  useEffect(() => {
    if (data?.length && dispatch) {
      dispatch({ type: 'SET_POKEMONS', payload: data });
    }
  }, [data, dispatch]);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {Pokemons?.map((pokemon) => {
        return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
}
