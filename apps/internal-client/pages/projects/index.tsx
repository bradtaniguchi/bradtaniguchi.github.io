import { Card } from '../../components/core/card';

export interface ProjectsProps {
  /**
   * The list of projects to display.
   */
  projects: Array<unknown>;
}

export default function Projects() {
  return (
    <Card>
      <Card.Header>Projects</Card.Header>
      <Card.Body p={0}>
        <Card.Row p={3}>testRow</Card.Row>
        <Card.Row p={3}>testRow</Card.Row>
        <Card.Row p={3}>testRow</Card.Row>
      </Card.Body>
    </Card>
  );
}

export async function getStaticProps(): Promise<{
  props: ProjectsProps;
}> {
  return {
    props: {
      projects: [],
    },
  };
}
