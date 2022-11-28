import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Store} from "./store";

const store = new Store();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App store={store} />
  </React.StrictMode>
);
