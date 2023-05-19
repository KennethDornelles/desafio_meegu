import { Theme, GlobalStyles } from 'theme';
import { Router } from 'routes';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  );
};