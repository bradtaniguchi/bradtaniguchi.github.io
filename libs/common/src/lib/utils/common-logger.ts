export type CommonLoggerLogLevels = 'log' | 'debug' | 'warn' | 'error';

/**
 * Configuration object for the common-logger.
 */
export interface CommonLoggerConfig {
  /**
   * List of hidden methods for the common-logger.
   */
  hidden?: Array<CommonLoggerLogLevels>;

  /**
   * Function that can be passed to "hook" into the emitting of logs
   * over time.
   *
   * Useful for "hooking" into log being emitted.
   */
  onLog?: (params: {
    /**
     * The level called
     */
    level: CommonLoggerLogLevels;
    /**
     * The message given, usually a string
     */
    message: unknown;
    /**
     * The optional params given
     */
    optionalParams: Array<unknown>;
  }) => void;
}

/**
 * Simple but configurable logger. Should be used on the client-side
 * and script situations, due to being overridable, and upgradable
 */
export class CommonLogger {
  /**
   * The list of hidden methods, defined from the config object.
   */
  public get hidden(): Array<'log' | 'debug' | 'warn' | 'error'> {
    return this.config?.hidden || [];
  }

  /**
   * @param config configuration object for the logger
   */
  constructor(public config?: CommonLoggerConfig) {}

  error(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('error')) return;
    console.error(message, ...optionalParams);
  }

  log(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('log')) return;
    console.log(message, ...optionalParams);
  }

  debug(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('debug')) return;
    console.debug(message, ...optionalParams);
  }

  warn(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('warn')) return;
    console.warn(message, ...optionalParams);
  }
}
