/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import AppHeader from '../components/core/app-header';
import { LOCAL_STORAGE_THEME_KEY } from '../constants/local-forage-theme-key';
import './styles.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderFixed = ThemeProvider as any;

/**
 * Top level wrapper component used to manage the page theme.
 */
function ThemedComponent({ Component, pageProps }: AppProps) {
  const { colorMode, setColorMode } = useTheme();
  const [localStorageColorMode, setLocalStorageColorMode] = useLocalStorage<
    typeof colorMode
  >(LOCAL_STORAGE_THEME_KEY);

  useEffect(() => {
    setLocalStorageColorMode(colorMode);
  }, [setLocalStorageColorMode, colorMode]);

  useEffectOnce(() => {
    const colorModes = ['night', 'day', 'auto'] as const;
    type ColorMode = typeof colorModes[number];

    if (colorModes.includes(localStorageColorMode as ColorMode)) {
      // required to bypass a race condition with the other effect
      setTimeout(() => {
        setColorMode(localStorageColorMode as ColorMode);
      }, 0);
    }

    document.documentElement.style.visibility = 'visible';
  });

  useEffect(() => {
    const hasSystemDarkMode =
      colorMode === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (colorMode === 'night' || hasSystemDarkMode) {
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
        <ThemeProviderFixed theme={theme} nightScheme="dark" preventSSRMismatch>
          <BaseStyles>
            <ThemedComponent {...props} />
          </BaseStyles>
        </ThemeProviderFixed>
      </SSRProvider>
    </>
  );
}
