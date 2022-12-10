// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const { withSentryConfig } = require('@sentry/nextjs');
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    // disable optimization
    unoptimized: true,
  },
  /**
   * **Note** this will throw a warning about unknown property, but
   * this is required for sentry to work it seems.
   * @type {import('@sentry/nextjs').SentryWebpackPluginOptions}
   */
  sentry: {
    // suppress warning about source-maps, codebase is open sourced.
    hideSourceMaps: false,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

module.exports = (() => {
  const isProd = process.env.NODE_ENV === 'production';
  const isAnalyze = process.env.ANALYZE == 'true';
  const isBare = process.env.BARE == 'true';

  if (isBare) return nextConfig;

  if (isAnalyze) return withBundleAnalyzer(nextConfig);

  if (isProd)
    return withNx(
      withSentryConfig(nextConfig, {
        silent: true,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
      })
    );

  return withNx(nextConfig);
})();
