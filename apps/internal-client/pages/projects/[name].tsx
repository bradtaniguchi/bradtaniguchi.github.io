import { getMarkdown } from '../../utils/get-markdown';
import { GetStaticPropsContext } from 'next';
import { PROJECTS_PATH } from '../../constants/projects-path';
import { StaticProject } from '../../models/project';
import { getProjectMetaData } from '../../utils/get-project-meta-data';
import { Card } from '../../components/core/card';
import { Box } from '@primer/react';

export interface ProjectProps {
  project: StaticProject;
  markdown: string;
}

export default function Project({ markdown, project }: ProjectProps) {
  // TODO: Add logic to handle different types of projects
  // currently only handling static ones.
  return (
    <Card>
      <Card.Header display="flex">
        <Box flexGrow="100">
          {/* might change later */}
          {project.title}
        </Box>
      </Card.Header>
      <Card.Body>
        {/* TODO: update/move to about? */}
        <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
      </Card.Body>
    </Card>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<ProjectProps> {
  const { name } = params;

  const filePath = `${PROJECTS_PATH}/${name}.md`;
  const [project, markdown] = await Promise.all([
    getProjectMetaData(filePath),
    getMarkdown(filePath),
  ]);

  return {
    project,
    markdown,
  };
}
