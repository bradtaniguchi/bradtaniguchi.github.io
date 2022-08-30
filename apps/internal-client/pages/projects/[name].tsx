import { Box } from '@primer/react';
import { getMarkdownFiles } from '../../utils/get-markdown-files';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { Card } from '../../components/core/card';
import { PROJECTS_PATH } from '../../constants/projects-path';
import { StaticProject } from '../../models/project';
import { getMarkdown } from '../../utils/get-markdown';
import {
  getProjectMetaData,
  getProjectsMetaData,
} from '../../utils/get-project-meta-data';

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
      {/* TODO: add meta-data information here in a "sub-card"? */}
      <Card.Body>
        {/* TODO: update/move to about? */}
        <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
      </Card.Body>
      {/* TODO: add social media "shares" here */}
    </Card>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const projectPaths = await getMarkdownFiles(PROJECTS_PATH);

  const projectsMetaData = await getProjectsMetaData(projectPaths);

  console.log('projects meta-data', projectsMetaData);
  return {
    paths: projectsMetaData.map(({ slug }) => slug),
    fallback: false,
  };
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
