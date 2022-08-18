import { Box, BoxProps } from '@primer/react';

export function Card(props: BoxProps) {
  return (
    <Box
      borderColor="border.default"
      borderWidth={1}
      borderStyle="solid"
      borderRadius="8px"
      {...props}
    >
      {props.children}
    </Box>
  );
}

Card.Header = function Header(props: BoxProps) {
  return (
    <Box bg="canvas.inset" p={3} borderRadius="8px 8px 0 0" {...props}>
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

Card.Row = function Row(props: BoxProps) {
  // TODO: add row styling
  return (
    <Box
      borderTopColor="border.default"
      borderTopStyle="solid"
      borderTopWidth="1px"
      {...props}
    >
      {props.children}
    </Box>
  );
};
