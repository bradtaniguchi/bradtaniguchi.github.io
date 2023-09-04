const { rimraf } = require('rimraf');

(async () => {
  await rimraf(
    [
      'dist',
      'apps/internal-client/.next',
      'node_modules/.cache/nx',
      '*.logs',
      '.eslintcache',
      '.lighthouserc.js',
      'coverage',
      '.lighthouseci',
      'tmp',
    ],
    {}
  );
})();
