import { useReducer } from "react";
import "./App.css";

const initialState = {
  names: [],
  name: "",
};

type initialStateType = {
  names: string[] | [];
  name: string;
};

type actionType = {
  type: "SET_NAME" | "ADD_NAME" | string;
  payload: string;
};

function reducerFunction(state: initialStateType, action: actionType) {
  switch (action.type) {
    case "SET_NAME": {
      return { ...state, name: action.payload };
    }
    case "ADD_NAME": {
      return { ...state, names: [...state.names, state.name], name: "" };
    }
    default:
      return { ...state };
  }
}

function NamesList() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  console.log(state);

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_NAME",
            payload: "",
          });
        }}
      >
        submit
      </button>
      {state.names.map((name, i) => (
        <p key={i}>{name}</p>
      ))}
    </div>
  );
}

const initialuserFormState = {
  first: "",
  last: "",
};

type initialUserFormState = typeof initialuserFormState

function userFormReducer(state:initialUserFormState , action: any) {
  return { ...state, ...action };
}

function UserForm() {
  const [state, dispatch] = useReducer(userFormReducer, initialuserFormState);
  console.log(state);
  
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />

     
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NamesList />
      <hr />
      <UserForm />
    </div>
  );
}
export default App;
