import { BaseConfig } from '@bradtaniguchi-dev/common-react';
import { Box, Text } from '@primer/react';
import { memo } from 'react';
import { Spinner } from '../spinner';

/**
 * Display component for the config.json
 */
export const InternalConfig = memo(function InternalConfig({
  configLoading,
  configError,
  config,
}: {
  configLoading?: boolean;
  configError: unknown;
  config: BaseConfig;
}) {
  return (
    <Box borderColor="border.default" borderWidth={1} borderStyle="solid" p={3}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderBottomStyle="solid"
      >
        <Text as="h5" m={0}>
          config.json
        </Text>
      </Box>
      <Text as="p">Configuration generated with the last build.</Text>
      <Text as="div">
        {(() => {
          if (configLoading) return <Spinner />;
          if (configError) return <Text>Error Loading config.json</Text>;
          return (
            <Box>
              <pre style={{ margin: '0' }}>
                {JSON.stringify(config, null, 2)}
              </pre>
            </Box>
          );
        })()}
      </Text>
    </Box>
  );
});
