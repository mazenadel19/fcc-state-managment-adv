import Home from '../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';
import NotFound from '../pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetails />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
