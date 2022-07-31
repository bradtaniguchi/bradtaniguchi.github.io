import { Theme } from '@bradtaniguchi-dev/common-react';
import { BaseStyles, Box, SSRProvider, ThemeProvider } from '@primer/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import AppHeader from '../components/core/app-header';
import { ThemeContext } from '../utils/theme-context';
import './styles.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderFixed = ThemeProvider as any;

export default function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <>
      <Head>
        <title>bradtaniguchi.dev</title>
      </Head>
      <SSRProvider>
        <ThemeContext.Provider value={{ theme: 'light', setTheme }}>
          {/* TODO: update theme settings
          See:https://github.com/bradtaniguchi/bradtaniguchi.github.io/blob/main/apps/client/src/app/app.component.html
           */}
          <ThemeProviderFixed theme={theme}>
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
