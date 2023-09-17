import React from 'react';
import { root } from '.';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
