import { Box, ProgressBar } from '@primer/react';

export const Spinner = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <ProgressBar progress={80} />
  </Box>
);
