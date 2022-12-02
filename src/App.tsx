import { useMemo, useState } from "react";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  const sum = useMemo(
    () =>
      numbers.reduce((acc, curr) => {
        return acc + curr;
      }, 0),
    [numbers]
  );

  const [names] = useState(["john", "jane", "joe"]);
  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <div className="App">
      <div>{sum}</div>
      <div>{names.join(', ')}</div>
      <div>{sortedNames.join(', ')}</div>
    </div>
  );
}

export default App;
