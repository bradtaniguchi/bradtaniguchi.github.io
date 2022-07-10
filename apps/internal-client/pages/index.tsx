import { Box } from '@primer/react';
import { Card } from '../components/core/card';

export function Index() {
  return (
    <Box display="grid" gridGap={3} gridTemplateColumns="1fr 1fr 1fr">
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        p={3}
      >
        <aside>Profile info goes here</aside>
      </Box>

      <Box gridColumn="span 2">
        <Box gridColumn="span 2">
          <Box display="grid" gridGap={3} gridTemplateColumns="1fr">
            <Card gridColumn="span 2">
              <Card.Header>README</Card.Header>
              <Card.Body>README goes here</Card.Body>
            </Card>
            <Card>
              <Card.Header>Activity</Card.Header>
              <Card.Body>Activity will go here</Card.Body>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
