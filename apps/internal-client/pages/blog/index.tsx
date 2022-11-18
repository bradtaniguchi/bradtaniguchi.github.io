import { Card } from '../../components/core/card';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogProps {}

export default function Blog(props: BlogProps) {
  return (
    <Card>
      <Card.Header>Projects</Card.Header>
      <Card.Body>
        <p>
          Blog is not available yet! I will be migrating over previous posts and
          adding a few new ones over time.
        </p>
      </Card.Body>
    </Card>
  );
}
