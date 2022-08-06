import { Box } from '@primer/react';
import { StaticProject as IStaticProject } from '../../models/project';
import { memo } from 'react';

export interface StaticProjectProps {
  project: IStaticProject;
}

/**
 * Static project UI component
 */
export const StaticProject = memo(function StaticProject(
  props: StaticProjectProps
) {
  return <Box>Static project</Box>;
});
