import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom-sweetalert.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {SearchProvider} from './context/SearchProvider';
import { GenreProvider } from './context/GenreProvider';
import { FavoritesProvider } from './context/useFavorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <GenreProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </GenreProvider>
    </SearchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
