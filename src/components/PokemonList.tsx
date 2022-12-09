import usePokemon from '../hooks/usePokemon';
import PokemonItem from './PokemonItem';

export default function PokemonList() {
  const { Pokemons } = usePokemon();

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {Pokemons?.map((pokemon) => {
        return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
}
