import { GetStaticPropsResult } from 'next';
import { Card } from '../../components/core/card';
import { StaticProject } from '../../components/project/static-project';
import { PROJECTS_PATH } from '../../constants/projects-path';
import { StaticProject as IStaticProject } from '../../models/project';
import { getMarkdownFiles } from '../../utils/get-markdown-files';
import { getProjectsMetaData } from '../../utils/get-project-meta-data';

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

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ProjectsProps>
> {
  // TODO: verify all slugs are different
  const STATIC_EXAMPLE_PROJECTS = [
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
  ];

  const projectPaths = await getMarkdownFiles(PROJECTS_PATH);

  console.log('projects-paths: ', projectPaths);

  const projectsMetaData = await getProjectsMetaData(projectPaths);

  return {
    props: {
      projects: [...STATIC_EXAMPLE_PROJECTS, ...projectsMetaData],
    },
  };
}
