import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactNode, SyntheticEvent } from 'react';

export interface StorybookLandingProps {
  /**
   * An example prop, provided to check with docs. Shown below the example text,
   * but before the button
   * @type {ReactNode}
   */
  exampleProp?: ReactNode;

  /**
   * An example callback. If not provided then the example button will not
   * show.
   * @default void
   */
  onButtonClick?: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Storybook landing component
 * @param props display props for storybook landing component
 * @returns jsx
 */
export function StorybookLanding(props: StorybookLandingProps) {
  const handleButtonClick = (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>
  ) => typeof props.onButtonClick === 'function' && props.onButtonClick(e);

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }} p={2}>
      <Typography variant="h1" component="h1">
        Welcome to Storybook!
      </Typography>
      <Typography component="p">
        This is a test component used to test storybook development.
      </Typography>

      {props.exampleProp ? props.exampleProp : null}

      {props.onButtonClick && typeof props.onButtonClick === 'function' ? (
        <Button
          variant="contained"
          component="button"
          onClick={handleButtonClick}
        >
          Example Button
        </Button>
      ) : null}
    </Box>
  );
}

export default StorybookLanding;
