import { Theme } from '@bradtaniguchi-dev/common-react';
import {
  BaseStyles,
  Box,
  SSRProvider,
  ThemeProvider,
  theme as primerTheme,
} from '@primer/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import AppHeader from '../components/core/app-header';
import { ThemeContext } from '../utils/theme-context';
import './styles.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderFixed = ThemeProvider as any;

export default function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('light');

  // transfer the theme to the color mode
  const colorMode = useMemo<'night' | 'day' | 'auto'>(
    () => (theme === 'light' ? 'day' : 'night'),
    [theme]
  );

  const dayScheme = useMemo(
    () => (theme === 'light' ? 'light' : 'night'),
    [theme]
  );

  const nightScheme = useMemo(() => {
    if (theme === 'light') return 'light';
    if (theme === 'grey') return 'dark_dimmed';
    return 'dark';
  }, [theme]);

  return (
    <>
      <Head>
        <title>bradtaniguchi.dev</title>
      </Head>
      <SSRProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {/* TODO: update theme settings
          See:https://github.com/bradtaniguchi/bradtaniguchi.github.io/blob/main/apps/client/src/app/app.component.html
           */}
          <ThemeProviderFixed
            theme={primerTheme}
            colorMode={colorMode}
            dayScheme={dayScheme}
            nightScheme={nightScheme}
          >
            <BaseStyles>
              {/* TODO: search can be a feature flag. */}
              <AppHeader></AppHeader>
              <main className="app">
                <Box
                  sx={{
                    flexGrow: 1,
                    padding: '12px',
                    overflow: 'auto',
                    height: 'calc(100vh - 53px)',
                  }}
                  bg={primerTheme.colorSchemes.dark}
                >
                  <Component {...pageProps} />
                </Box>
              </main>
            </BaseStyles>
          </ThemeProviderFixed>
        </ThemeContext.Provider>
      </SSRProvider>
    </>
  );
}
