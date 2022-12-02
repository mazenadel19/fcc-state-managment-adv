import { useState } from 'react';
import { useHttp } from './useHttp';
import { Person } from './types';
import './App.css';

function App() {
  // const [selectedId, setSelectedId] = useState<number>(1);
  // const people = useHttp({ url: 'https://jsonplaceholder.typicode.com/users' });
  const [selectedId, setSelectedId] = useState('');
  const people = useHttp({ url: '/names.json' });

  return (
    <div className="App">
      {(people as Person[])?.map(({ id, name }) => (
        <button key={id} onClick={() => setSelectedId(name)}>
          {name}
        </button>
      ))}
      <br />
      <InnerComponent selectedId={selectedId} />
    </div>
  );
}

export default App;

const InnerComponent = ({ selectedId }: { selectedId: number | string }) => {
  const person = useHttp({ url: `/${selectedId}.json` });

  return <div>{(person as Person)?.username}</div>;
};
