import { createContext, ReactNode } from 'react';

/**
 * Context used in conjunction with the HeaderBar component,
 * allows child components to update the header-bar for the page-needs dynamically.
 */
export const HeaderBarContext = createContext<ReactNode | undefined>(undefined);
