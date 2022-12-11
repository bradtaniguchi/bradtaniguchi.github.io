import { useLocalForage } from '@bradtaniguchi-dev/common-react';
import {
  BaseStyles,
  Box,
  SSRProvider,
  theme,
  ThemeProvider,
  useTheme,
} from '@primer/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import AppHeader from '../components/core/app-header';
import { LOCAL_FORAGE_THEME_KEY } from '../constants/local-forage-theme-key';
import './styles.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderFixed = ThemeProvider as any;

/**
 * Top level wrapper component used to manage the page theme.
 */
function ThemedComponent({ Component, pageProps }: AppProps) {
  const { colorMode, setColorMode } = useTheme();
  const localForage = useLocalForage(useMemo(() => ({}), []));

  useEffect(() => {
    localForage.setItem(LOCAL_FORAGE_THEME_KEY, colorMode);
  }, [localForage, colorMode]);

  useEffect(() => {
    localForage.getItem(LOCAL_FORAGE_THEME_KEY).then((colorMode?: string) => {
      const colorModes = ['night', 'day', 'auto'] as const;
      type ColorMode = typeof colorModes[number];

      if (colorModes.includes(colorMode as ColorMode)) {
        setColorMode(colorMode as ColorMode);
      }
      document.documentElement.style.visibility = 'visible';
    });
  }, [setColorMode, localForage]);

  useEffect(() => {
    if (colorMode === 'night') {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'inherit';
    }
  }, [colorMode]);

  return (
    <>
      <AppHeader showBlog={true}></AppHeader>
      <main>
        <Box
          sx={{
            flexGrow: 1,
            padding: '12px',
            paddingBottom: '48px',
            overflow: 'auto',
            height: 'calc(100vh - 72px)',
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
        <ThemeProviderFixed theme={theme} nightScheme="dark">
          <BaseStyles>
            <ThemedComponent {...props} />
          </BaseStyles>
        </ThemeProviderFixed>
      </SSRProvider>
    </>
  );
}
