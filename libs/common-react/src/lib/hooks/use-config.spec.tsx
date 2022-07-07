import { useConfig } from './use-config';
import { render, screen, waitFor } from '@testing-library/react';
import * as utils from '../utils';
import { BaseConfig } from '../types/base-config';
import * as React from 'react';

describe('useConfig', () => {
  const baseConfig: BaseConfig = {
    sha: 'sha',
    ref_type: 'tag',
    tag: '1234',
  };
  let getConfigSpy: jest.SpyInstance;

  beforeEach(() => {
    getConfigSpy = jest.spyOn(utils, 'getConfig');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function UseConfigExample() {
    const { config, configError, configLoading } = useConfig();

    return (
      <div>
        <div data-testid="config">{JSON.stringify(config, null, 2)}</div>
        <div data-testid="configError">
          {(configError as Error)?.message ?? null}
        </div>
        <div data-testid="configLoading">{'' + configLoading}</div>
      </div>
    );
  }

  it('returns config', async () => {
    getConfigSpy.mockResolvedValueOnce({ ...baseConfig });
    render(<UseConfigExample />);
    await waitFor(() => {
      expect(screen.getByTestId('config').textContent).toEqual(
        JSON.stringify({ ...baseConfig }, null, 2)
      );
      expect(screen.getByTestId('configError').textContent).toEqual('');
      expect(screen.getByTestId('configLoading').textContent).toEqual('false');
    });
  });
  it('returns error', async () => {
    getConfigSpy.mockRejectedValueOnce(new Error('Oh no!'));
    render(<UseConfigExample />);
    await waitFor(() => {
      expect(screen.getByTestId('config').textContent).toEqual('');
      expect(screen.getByTestId('configError').textContent).toEqual('Oh no!');
      expect(screen.getByTestId('configLoading').textContent).toEqual('false');
    });
  });
});
