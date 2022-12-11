import type { PlaywrightTestConfig } from '@playwright/test';

import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  // lower the timeout to 5 seconds as this app should be fast.
  timeout: 5_000,
};

export default config;
