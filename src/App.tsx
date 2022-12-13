import { Outlet } from '@tanstack/react-location';

import './App.css';

function App() {
  return (
    <div className="mx-auto max-w-3xl">
      <Outlet />
    </div>
  );
}

export default App;
