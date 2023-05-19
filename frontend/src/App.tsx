import { Theme, GlobalStyles } from 'themes';
import { Router } from 'routes';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  );
};
