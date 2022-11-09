import { Box } from '@primer/react';
import { getMarkdownFiles } from '../../utils/get-markdown-files';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { Card } from '../../components/core/card';
import { PROJECTS_PATH } from '../../constants/projects-path';
import { StaticProject } from '../../models/project';
import { getMarkdown } from '../../utils/get-markdown';
import {
  getProjectMetaData,
  getProjectsMetaData,
  verifyProjectsMetaData,
} from '../../utils/get-project-meta-data';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { CommonLogger } from '@bradtaniguchi-dev/common';

export interface ProjectProps {
  project: StaticProject;
  markdown: string;
}

export default function Project({ markdown, project }: ProjectProps) {
  // TODO: Add logic to handle different types of projects
  // currently only handling static ones.
  return (
    <Card>
      <Card.Header
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <span>{project.title}</span>

        <span>
          <Link href="/projects" aria-label="Back to Projects List">
            <FaArrowLeft />
          </Link>
        </span>
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
  const logger = new CommonLogger();
  const projectPaths = await getMarkdownFiles(PROJECTS_PATH);

  const projectsMetaData = await getProjectsMetaData(projectPaths);

  verifyProjectsMetaData(projectsMetaData);

  logger.log('projects meta-data', projectsMetaData);
  return {
    paths: projectsMetaData.map(({ slug }) => ({
      params: {
        name: slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<ProjectProps>> {
  const { name } = params;

  const filePath = `${PROJECTS_PATH}/${name}.md`;
  const [project, markdown] = await Promise.all([
    getProjectMetaData(filePath),
    getMarkdown(filePath),
  ]);

  return {
    props: {
      project,
      markdown,
    },
  };
}
