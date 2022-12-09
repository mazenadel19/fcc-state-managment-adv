import { Pokemons } from './types';

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

// context
export interface IContext {
  Pokemons: [] | Pokemons;
  Search: string;
  dispatch?: React.Dispatch<IAction>;
}

// reducer
export interface IPokemonState {
  Search: string;
}
// reducer
export interface IAction {
  type: 'SET_SEARCH';
  payload: string;
}

// state
export interface IState {
  Pokemons: [] | Pokemons;
  Search: string;
}
