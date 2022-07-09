import {
  BaseStyles,
  Box,
  SSRProvider,
  theme,
  ThemeProvider,
} from '@primer/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AppHeader from '../components/core/app-header';
import './styles.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderFixed = ThemeProvider as any;

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bradtaniguchi.dev</title>
      </Head>
      <SSRProvider>
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
      </SSRProvider>
    </>
  );
}
