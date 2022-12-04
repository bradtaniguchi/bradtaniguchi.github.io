import { CommonLogger } from '@bradtaniguchi-dev/common';
import { useLocalCollection } from '@bradtaniguchi-dev/common-react';
import { SearchIcon, XIcon } from '@primer/octicons-react';
import { Box, IconButton, TextInput } from '@primer/react';
import { GetStaticPropsResult } from 'next';
import { ChangeEventHandler, useCallback, useMemo, useState } from 'react';
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
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  // TODO: add debounce from use-react

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

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setSearchValue(e.target.value),
    []
  );
  const onShowSearch = useCallback(() => setShowSearch(true), [setShowSearch]);
  const onSearchClose = useCallback(() => {
    setShowSearch(false);
    setSearchValue('');
  }, [setShowSearch]);

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
            {/* TODO: add sorting+filtering */}
            {showSearch ? (
              <TextInput
                aria-label="search"
                name="search"
                placeholder="Search"
                autoComplete="off"
                onChange={onSearchChange}
                trailingAction={
                  <TextInput.Action
                    onClick={onSearchClose}
                    icon={XIcon}
                    aria-label="Clear input"
                    sx={{ color: 'fg.subtle' }}
                  />
                }
              />
            ) : (
              <IconButton
                aria-label="Search"
                icon={SearchIcon}
                onClick={onShowSearch}
              />
            )}
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
