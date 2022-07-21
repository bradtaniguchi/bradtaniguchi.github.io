// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  // TODO: Change on rename
  assetPrefix: isProd ? '/bradtaniguchi-dev/' : '',
};

module.exports = withNx(nextConfig);
