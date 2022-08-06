import { StaticProject } from '../../components/project/static-project';
import { Card } from '../../components/core/card';
import { StaticProject as IStaticProject } from '../../models/project';

export interface ProjectsProps {
  /**
   * The list of projects to display.
   */
  projects: Array<IStaticProject>;
}

export default function Projects(props: ProjectsProps) {
  return (
    <Card>
      <Card.Header>Projects</Card.Header>
      <Card.Body p={0}>
        {props.projects.map((project) => (
          <Card.Row p={3} key={project.slug}>
            <StaticProject project={project}></StaticProject>
          </Card.Row>
        ))}
      </Card.Body>
    </Card>
  );
}

export async function getStaticProps(): Promise<{
  props: ProjectsProps;
}> {
  // TODO: verify all slugs are different
  return {
    props: {
      projects: [
        {
          slug: 'project-1',
        },
        {
          slug: 'project-2',
        },
        {
          slug: 'project-3',
        },
      ],
    },
  };
}
