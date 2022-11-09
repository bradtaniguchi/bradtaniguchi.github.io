import { CommonLogger } from '@bradtaniguchi-dev/common';
import { GetStaticPropsResult } from 'next';
import { Card } from '../../components/core/card';
import { StaticProject } from '../../components/project/static-project';
import { PROJECTS_PATH } from '../../constants/projects-path';
import { StaticProject as IStaticProject } from '../../models/project';
import { getMarkdownFiles } from '../../utils/get-markdown-files';
import {
  getProjectsMetaData,
  verifyProjectsMetaData,
} from '../../utils/get-project-meta-data';

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
  const logger = new CommonLogger();

  const projectPaths = await getMarkdownFiles(PROJECTS_PATH);

  logger.log('projects-paths: ', projectPaths);

  const projectsMetaData = await getProjectsMetaData(projectPaths);

  verifyProjectsMetaData(projectsMetaData);

  return {
    props: {
      projects: projectsMetaData,
    },
  };
}
