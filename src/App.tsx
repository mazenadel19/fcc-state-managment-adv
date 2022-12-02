import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((p) => p + 1)}>{count}</button>
    </div>
  );
}

function NameList() {
  const [nameList, setNameList] = useState(["amy", "bebop", "cathy"]);
  const [name, setName] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNameList((p) => [...p, name]);
    setName('')
  };
  return (
    <div>
      {nameList.map((name,index) => (
        <p key={index}>{name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NameList />
    </div>
  );
}

export default App;
