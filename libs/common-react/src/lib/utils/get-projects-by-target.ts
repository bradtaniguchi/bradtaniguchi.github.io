import { ProjectGraph } from '@nrwl/devkit';

/**
 * Function that returns the list of projects with the given target
 */
export const getProjectsByTarget = ({
  graph,
  target,
}: {
  /**
   * The project graph to use
   */
  graph: ProjectGraph;
  /**
   * The target to the the projects for
   */
  target: string;
}): string[] =>
  Object.entries(graph?.nodes || {}).reduce((acc, [project, node]) => {
    if (Object.keys(node?.data?.targets).includes(target)) acc.push(project);
    return acc;
  }, [] as string[]);
