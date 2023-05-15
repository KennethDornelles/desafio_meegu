import React from 'react';
import { Theme, GlobalStyles } from 'theme';
import { Router } from 'routes';

export const App = () => {
  return (
    <div className="App">
      <Theme>
        <GlobalStyles />
        <Router />
      </Theme>
    </div>
  );
};
