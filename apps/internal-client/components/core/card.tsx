import { Box, BoxProps } from '@primer/react';

export function Card(props: BoxProps) {
  return (
    <Box
      borderColor="border.default"
      borderWidth={1}
      borderStyle="solid"
      {...props}
    >
      {props.children}
    </Box>
  );
}

Card.Header = function Header(props: BoxProps) {
  return (
    <Box bg="canvas.inset" p={3} {...props}>
      {props.children}
    </Box>
  );
};

Card.Body = function Body(props: BoxProps) {
  return (
    <Box p={3} {...props}>
      {props.children}
    </Box>
  );
};
