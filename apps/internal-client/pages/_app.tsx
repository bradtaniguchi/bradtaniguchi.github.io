import { useLogger } from '@bradtaniguchi-dev/common-react';
import {
  BaseStyles,
  Box,
  SSRProvider,
  theme as primerTheme,
  ThemeProvider,
  useTheme,
} from '@primer/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AppHeader from '../components/core/app-header';
import './styles.css';

// TODO: move into another file
const myTheme = primerTheme;
// myTheme.colorSchemes.light.colors.canvas.default = 'green';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderFixed = ThemeProvider as any;

function ThemedComponent({ Component, pageProps }: AppProps) {
  const { colorMode } = useTheme();
  const logger = useLogger();
  logger.log('[ThemedComponent]', { colorMode });

  return (
    <>
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
    </>
  );
}

export default function CustomApp(props: AppProps) {
  return (
    <>
      <Head>
        <title>bradtaniguchi.dev</title>
      </Head>
      <SSRProvider>
        {/* TODO: update theme settings
          See:https://github.com/bradtaniguchi/bradtaniguchi.github.io/blob/main/apps/client/src/app/app.component.html
           */}
        <ThemeProviderFixed theme={myTheme} nightScheme="dark">
          <BaseStyles>
            <ThemedComponent {...props} />
          </BaseStyles>
        </ThemeProviderFixed>
      </SSRProvider>
    </>
  );
}
