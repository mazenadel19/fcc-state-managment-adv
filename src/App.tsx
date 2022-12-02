import {useState, useMemo, useCallback } from "react";
import "./App.css";

interface Iprops {
  list: string[];
  sortFunc: (a: string, b: string) => number;
  callback?: boolean;
}

function SortedList({ list, sortFunc, callback }: Iprops) {
  console.log(!!callback);

  console.log("SortedList rerendered");
  const sortedNames = useMemo(() => {
    console.log(
      "sortedNames rerendered"
    );

    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return <div>{sortedNames.join(", ")}</div>;
}

const sortFunc1 = (a: string, b: any) => a.localeCompare(b) * -1;
function App() {
  const sortFunc2 = useCallback((a: string, b: any) => a.localeCompare(b), []);
  
  const [n, setn] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setn((old: number) => old + 1)}>{n}</button>
      {/* <SortedList list={["john", "jane", "joe"]} sortFunc={sortFunc1} /> */}
      <SortedList
        list={["john", "jane", "joe"]}
        sortFunc={sortFunc2}
        callback
      />
    </div>
  );
}

export default App;
