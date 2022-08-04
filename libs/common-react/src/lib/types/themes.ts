/**
 * Tuple of themes
 */
export const THEMES = ['dark', 'grey', 'light'] as const;
/**
 * Starter type for the different kinds of themes.
 */
export type Theme = typeof THEMES[number];
