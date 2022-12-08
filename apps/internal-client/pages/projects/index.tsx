import { useLocalCollection } from '@bradtaniguchi-dev/common-react';
import { Box } from '@primer/react';
import { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { Card } from '../../components/core/card';
import { StaticProject } from '../../components/project/static-project';
import {
  ListFilterProps,
  ListFilters,
} from '../../components/projects/list-filters';
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
  const router = useRouter();

  const defaultSearchValue = Array.isArray(router.query.q)
    ? router.query.q.join(' ')
    : router.query.q;

  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange: ListFilterProps['onSearchChange'] = useCallback(
    (searchValue) => {
      setSearchValue(searchValue);
    },
    []
  );

  const { results: projects } = useLocalCollection({
    elements: props.projects,
    searchOptions: useMemo(
      () => ({
        keys: ['name', 'description', 'tags'] as Array<keyof IStaticProject>,
        distance: 0.8,
      }),
      []
    ),
    search: searchValue,
  });

  return (
    <Card>
      <Card.Header>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <div>Projects</div>
          <div>
            <ListFilters
              defaultSearchValue={defaultSearchValue}
              onSearchChange={handleSearchChange}
            />
          </div>
        </Box>
      </Card.Header>
      <Card.Body p={0}>
        {projects.map((project) => (
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
  const projectPaths = await getMarkdownFiles(PROJECTS_PATH);

  const projectsMetaData = await getProjectsMetaData(projectPaths);

  verifyProjectsMetaData(projectsMetaData);

  return {
    props: {
      projects: projectsMetaData,
    },
  };
}
