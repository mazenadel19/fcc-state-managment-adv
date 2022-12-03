import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useHttp } from './hooks/useHttp';
import { Pokemon } from './typescript/interfaces';
import './App.css';

function App() {
  const data = useHttp({ url: '/pokemon.json' });
  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="App">
      {(data as Pokemon[])?.map((pokemon) => {
        return <p key={pokemon.id}>{pokemon.name}</p>;
      })}
    </div>
  );
}

export default App;
