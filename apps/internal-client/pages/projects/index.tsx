import { CommonLogger } from '@bradtaniguchi-dev/common';
import { useLocalCollection, useLogger } from '@bradtaniguchi-dev/common-react';
import { Box } from '@primer/react';
import { GetStaticPropsResult } from 'next';
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
  const logger = useLogger();

  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearchChange: ListFilterProps['onSearchChange'] = useCallback(
    (searchValue) => {
      setSearchValue(searchValue);
    },
    []
  );
  const handleTagChange = useCallback(
    (updatedSelectedTags: string[]) => {
      logger.log('handleTagChange', { selectedTags, updatedSelectedTags });
      setSelectedTags(updatedSelectedTags);
    },
    [logger, selectedTags]
  );

  const { results: projects } = useLocalCollection({
    elements: props.projects,
    searchOptions: useMemo(
      () => ({
        keys: ['name', 'description'],
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
              onSearchChange={handleSearchChange}
              availableTags={['one', 'two', 'three']}
              selectedTags={selectedTags}
              onTagChange={handleTagChange}
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
