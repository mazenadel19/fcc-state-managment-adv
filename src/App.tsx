import { useContext } from 'react';
import { PokemonContext } from './context/PokemonContext';
import './App.css';
// import { useHttp } from './hooks/useHttp';
// import { Pokemon } from './typescript/interfaces';

function App() {
  const { Pokemons } = useContext(PokemonContext);
  // const data = useHttp({ url: '/pokemon.json' }) as Pokemon[];

  return (
    <div className="App">
      {Pokemons?.map((pokemon) => {
        return <p key={pokemon.id}>{pokemon.name}</p>;
      })}
    </div>
  );
}

export default App;
