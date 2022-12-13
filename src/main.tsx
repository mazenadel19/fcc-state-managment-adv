import { ReactLocation, Router } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PokemonProvider from './context/PokemonContext';
import './index.css';
import { routes } from './routes/routes';

const queryClient = new QueryClient();
const location = new ReactLocation();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
