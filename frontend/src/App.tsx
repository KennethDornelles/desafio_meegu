import React from 'react';
import { Theme } from './theme';
import { Router } from './routes/index';

export const App = () => {
  return (
    <div className="App">
      <Theme>
        <Router />
      </Theme>
    </div>
  );
};
