import {
  useHasMounted,
  useLocalCollection,
} from '@bradtaniguchi-dev/common-react';
import { Box, Button, Spinner, Text } from '@primer/react';
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
  const mounted = useHasMounted();

  const defaultSearchValue = Array.isArray(router.query.q)
    ? router.query.q.join(' ')
    : router.query.q;

  const [searchValue, setSearchValue] = useState<string>('');
  const [limit, setLimit] = useState<number>(5);

  const handleSearchChange: ListFilterProps['onSearchChange'] = useCallback(
    (searchValue: string) => {
      setSearchValue(searchValue);
      setLimit(5);
    },
    []
  );

  const handleSearchClose = useCallback(() => {
    setLimit(5);
  }, []);

  const handleShowMoreOnClick = () => setLimit(limit + 5);

  const { results: projects } = useLocalCollection({
    elements: props.projects,
    searchOptions: useMemo(
      () => ({
        keys: ['title', 'description', 'tags'] as Array<keyof IStaticProject>,
        distance: 0.8,
      }),
      []
    ),
    search: searchValue,
    sortBy: 'date',
    sortDir: 'dsc',
  });

  // we only want to show this button if the limit is less than the total
  const showShowMore = limit < projects.length;

  // when in a server-environment, render a spinner for the quick duration
  // between hydration and rendering
  if (!mounted) return <Spinner />;

  return (
    <Card>
      <Card.Header>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text as="h2" fontSize={'inherit'} margin={0}>
            Projects
          </Text>
          <div>
            <ListFilters
              defaultSearchValue={defaultSearchValue}
              onSearchChange={handleSearchChange}
              onSearchClear={handleSearchClose}
            />
          </div>
        </Box>
      </Card.Header>
      <Card.Body p={0}>
        <ul>
          {projects
            .map((project) => (
              <Card.Row p={3} key={project.slug}>
                <li>
                  <StaticProject
                    project={project as unknown as IStaticProject}
                  ></StaticProject>
                </li>
              </Card.Row>
            ))
            .slice(0, limit)}
        </ul>
        {showShowMore ? (
          <Box sx={{ margin: '8px' }}>
            <Button
              sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onClick={handleShowMoreOnClick}
            >
              Show More
            </Button>
          </Box>
        ) : null}
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
