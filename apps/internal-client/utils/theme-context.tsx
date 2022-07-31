import { themeContextFactory } from '@bradtaniguchi-dev/common-react';

/**
 * @unstable
 */
export const ThemeContext = themeContextFactory({
  theme: 'light',
  setTheme: () => '',
});
