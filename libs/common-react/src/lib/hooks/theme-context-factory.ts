import { createContext } from 'react';
import { Theme } from '../types/themes';

/**
 * Typed factory function that creates a theme context that can be used across
 * the entire app.
 *
 * @params theme the theme to default to initially
 * @unstable
 */
export function themeContextFactory({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) {
  return createContext({
    theme,
    setTheme,
  });
}
