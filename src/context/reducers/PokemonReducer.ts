import { IAction, IPokemonState } from '../../typescript/interfaces';

export default function PokemonReducer(state: IPokemonState, action: IAction) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, Search: action.payload };

    default:
      return { ...state };
  }
}
