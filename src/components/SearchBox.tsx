import usePokemon from '../hooks/usePokemon';

export default function SearchBox() {
  const { Search, dispatch } = usePokemon();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch && dispatch({ type: 'SET_SEARCH', payload: e.target.value });
  };

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={Search}
      onChange={changeHandler}
    />
  );
}
