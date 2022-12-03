import './App.css';
import usePokemon from './hooks/usePokemon';

function App() {
  const Pokemons = usePokemon();

  return (
    <div className="App">
      {Pokemons?.map((pokemon) => {
        return <p key={pokemon.id}>{pokemon.name}</p>;
      })}
    </div>
  );
}

export default App;
