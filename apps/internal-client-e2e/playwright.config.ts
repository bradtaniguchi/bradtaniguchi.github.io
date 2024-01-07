import type { PlaywrightTestConfig } from '@playwright/test';

import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  // lower the timeout to 5 seconds as this app should be fast.
  timeout: 20_000,
  reporter: 'html',
  // always have 2 retries
  retries: 2,
  use: {
    ...baseConfig.use,
    trace: 'on',
  },
};

if (config.use?.baseURL === 'local') {
  // special value, will target a pre-existing build of
  // internal-client running on a http-server locally

  config.use.baseURL = `http://127.0.0.1:8080`;
}

export default config;
