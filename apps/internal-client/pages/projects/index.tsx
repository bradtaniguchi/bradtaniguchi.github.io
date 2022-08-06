import { StaticProject } from '../../components/project/static-project';
import { Card } from '../../components/core/card';
import { StaticProject as IStaticProject } from '../../models/project';

export interface ProjectsProps {
  /**
   * The list of projects to display.
   */
  projects: Array<Partial<IStaticProject>>;
}

export default function Projects(props: ProjectsProps) {
  return (
    <Card>
      <Card.Header>Projects</Card.Header>
      <Card.Body p={0}>
        {props.projects.map((project) => (
          <Card.Row p={3} key={project.slug}>
            <StaticProject
              project={project as unknown as IStaticProject}
            ></StaticProject>
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
          title: 'Project One',
          description: 'Project one description',
          tags: ['one'],
          date: new Date().toISOString(),
        },
        {
          slug: 'project-2',
          title: 'Project Two',
          description: 'Project two description',
          tags: ['two', 'three'],
          date: new Date().toISOString(),
        },
        {
          slug: 'project-3',
          title: 'Project Three',
          description:
            'Project three description this one is extra long as a test' +
            new Array(100).fill(' test'),
          tags: ['four', 'long'],
          date: new Date().toISOString(),
        },
      ],
    },
  };
}
