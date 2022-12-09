import { Pokemon } from '../typescript/interfaces';

export default function PokemonItem({ pokemon }: { pokemon: Pokemon }): JSX.Element {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
          src={`/vite.svg`}
          // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt="pokemon"
        />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{pokemon.name}</h3>
      </div>
    </li>
  );
}
