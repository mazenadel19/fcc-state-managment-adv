import { useState } from 'react';
import { useHttp } from './useHttp';
import { Person } from './types';
import './App.css';

function App() {
  const [data, setData] = useState<Person | undefined>();
  const people = useHttp({ url: '/names.json' });

  const onSelectName = (name: string) => {
    if (name) {
      fetch(`/${name}.json`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  return (
    <div className="App">
      {(people as Person[])?.map(({ id, name }) => (
        <button key={id} onClick={() => onSelectName(name)}>
          {name}
        </button>
      ))}
      <br />
      <InnerComponent selected={data} />
    </div>
  );
}

export default App;

const InnerComponent = ({ selected }: { selected: Person | undefined }) => {
  return selected ? <div>{(selected as Person).username}</div> : null;
};
