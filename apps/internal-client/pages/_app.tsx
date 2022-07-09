import { AppProps } from 'next/app';
import Head from 'next/head';
import { BaseStyles, ThemeProvider, theme } from '@primer/react';
import { SSRProvider } from '@primer/react';
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
            <main className="app">
              <Component {...pageProps} />
            </main>
          </BaseStyles>
        </ThemeProviderFixed>
      </SSRProvider>
    </>
  );
}
