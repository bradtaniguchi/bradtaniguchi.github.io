import { loggerContextFactory } from '@bradtaniguchi-dev/common-react';
import { captureMessage } from '@sentry/nextjs';

export const LoggerProvider = loggerContextFactory({
  onLog: ({ level, message }) => {
    if (level === 'error' && typeof message === 'string')
      captureMessage(message);
  },
});
