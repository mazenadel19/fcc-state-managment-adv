import { createContext } from 'react';
import { useHttp } from '../hooks/useHttp';
import { Pokemon } from '../typescript/interfaces';

// Interface
interface IContext {
  Pokemons: [] | Pokemon[];
}

// pokemon context
export const PokemonContext = createContext<IContext>({ Pokemons: [] });

const PokemonProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const data = useHttp({ url: '/pokemon.json' }) as Pokemon[];

  return <PokemonContext.Provider value={{ Pokemons: data }}>{children}</PokemonContext.Provider>;
};

export default PokemonProvider;
