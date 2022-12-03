import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState<[] | { id: number; name: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = inputRef.current?.value;
    e.preventDefault();
    data && setPeople((prev) => [...prev, { id: prev.length, name: data }]);
    inputRef.current?.value && (inputRef.current.value = '');
  };

  console.log(people);

  return (
    <div className="App">
      {people.map((person) => (
        <h1 key={person.id}>{person.name}</h1>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="test">
          test <br />
          <input type="text" ref={inputRef} id="test" />
        </label>
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
