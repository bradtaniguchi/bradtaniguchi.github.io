import { CommonLogger, CommonLoggerConfig } from '@nx-template/common';
import { createContext, useDebugValue, useMemo } from 'react';

/**
 * Hook that creates an instance of the CommonLogger class and returns it.
 *
 * This should be used for one-off instance creations.
 * It should not be used for common updates to localStorage as it creates
 * a new instance all the time.
 *
 * @params options the CommonLogger options params
 *
 * @see CommonLogger
 * @unstable
 */
export function useLogger(options?: CommonLoggerConfig) {
  useDebugValue(options);
  return useMemo(() => new CommonLogger(options), [options]);
}

/**
 * Creates a loggerContext that can be used across the entire app.
 *
 * This should be used to create a single high level context
 * of the `CommonLogger` that can be used to handle client-side logging.
 * @params options the CommonLogger options params
 *
 * @see CommonLogger
 * @unstable
 */
export function loggerContextFactory(options?: CommonLoggerConfig) {
  return createContext(new CommonLogger(options));
}
