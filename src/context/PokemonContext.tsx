import { createContext, ReactNode, useReducer } from 'react';
import { IContext, IPokemonState, IState } from '../typescript/interfaces';
import PokemonReducer from './reducers/PokemonReducer';

export const PokemonContext = createContext<IContext>({ Pokemons: [], Search: '' });

const initState: IState = {
  Pokemons: [],
  Search: ''
};

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [state, dispatch] = useReducer<any>(PokemonReducer, initState);

  return (
    <PokemonContext.Provider
      value={{
        Search: (state as IPokemonState).Search,
        Pokemons: (state as IPokemonState).Pokemons,
        dispatch
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
