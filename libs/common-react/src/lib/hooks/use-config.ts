import { useState, useEffect, useDebugValue } from 'react';
import { BaseConfig } from '../types';
import { getConfig } from '../utils';

/**
 * Hook that can be used to get the config file.
 * @see getConfig
 * @see Config
 */
export function useConfig<AppConfig extends object>(params?: {
  path?: string;
  overrides?: Partial<BaseConfig & AppConfig>;
}) {
  const { path, overrides } = params ?? {};
  const [configLoading, setConfigLoading] = useState<boolean>(false);
  const [configError, setConfigError] = useState<unknown>();
  const [config, setConfig] = useState<BaseConfig>();

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      setConfigLoading(true);
      getConfig(params)
        .then((config) => {
          setConfigLoading(false);
          setConfig(config);
        })
        .catch((err) => {
          setConfigLoading(false);
          if (!overrides) setConfigError(err);
        });
      mounted = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, overrides]);

  useDebugValue({ configLoading, configError, config });

  return { configLoading, configError, config };
}
